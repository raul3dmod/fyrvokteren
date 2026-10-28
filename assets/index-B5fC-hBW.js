(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pl="170",Gu=0,ac=1,Hu=2,Lh=1,Uh=2,_i=3,Vi=0,xn=1,Ze=2,Je=0,Oi=1,ri=2,oc=3,lc=4,Ih=5,qn=100,Wu=101,Xu=102,qu=103,Yu=104,ur=200,ju=201,$u=202,Zu=203,Io=204,No=205,Fo=206,Ku=207,zo=208,Ju=209,Qu=210,tf=211,ef=212,nf=213,sf=214,Oo=0,Bo=1,ko=2,Gs=3,Vo=4,Go=5,Ho=6,Wo=7,Dl=0,rf=1,af=2,Bi=0,Nh=1,Fh=2,zh=3,Ll=4,of=5,Oh=6,Bh=7,kh=300,Hs=301,Ws=302,Xo=303,qo=304,La=306,Ti=1e3,ts=1001,Yo=1002,ln=1003,lf=1004,Ir=1005,si=1006,Xa=1007,es=1008,ai=1009,Vh=1010,Gh=1011,Sr=1012,Ul=1013,as=1014,$n=1015,Fn=1016,Il=1017,Nl=1018,os=1020,Hh=35902,Wh=1021,Xh=1022,In=1023,qh=1024,Yh=1025,Fs=1026,ls=1027,Ua=1028,Fl=1029,jh=1030,zl=1031,Ol=1033,va=33776,xa=33777,_a=33778,Ma=33779,jo=35840,$o=35841,Zo=35842,Ko=35843,Jo=36196,Qo=37492,tl=37496,el=37808,nl=37809,il=37810,sl=37811,rl=37812,al=37813,ol=37814,ll=37815,cl=37816,hl=37817,ul=37818,fl=37819,dl=37820,pl=37821,ya=36492,ml=36494,gl=36495,$h=36283,vl=36284,xl=36285,_l=36286,cf=3200,hf=3201,Bl=0,uf=1,Ii="",rn="srgb",js="srgb-linear",Ia="linear",ye="srgb",vs=7680,cc=519,ff=512,df=513,pf=514,Zh=515,mf=516,gf=517,vf=518,xf=519,hc=35044,uc="300 es",Si=2e3,Aa=2001;class $s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fc=1234567;const mr=Math.PI/180,br=180/Math.PI;function Zs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function kl(i,t){return(i%t+t)%t}function _f(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Mf(i,t,e){return i!==t?(e-i)/(t-i):0}function gr(i,t,e){return(1-e)*i+e*t}function yf(i,t,e,n){return gr(i,t,1-Math.exp(-e*n))}function Sf(i,t=1){return t-Math.abs(kl(i,t*2)-t)}function bf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ef(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Tf(i,t){return i+Math.random()*(t-i)}function Af(i){return i*(.5-Math.random())}function Cf(i){i!==void 0&&(fc=i);let t=fc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rf(i){return i*mr}function Pf(i){return i*br}function Df(i){return(i&i-1)===0&&i!==0}function Lf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Uf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function If(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),p=a((t-n)/2),d=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*h,l*p,o*c);break;case"YZY":i.set(l*p,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*p,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ie={DEG2RAD:mr,RAD2DEG:br,generateUUID:Zs,clamp:$e,euclideanModulo:kl,mapLinear:_f,inverseLerp:Mf,lerp:gr,damp:yf,pingpong:Sf,smoothstep:bf,smootherstep:wf,randInt:Ef,randFloat:Tf,randFloatSpread:Af,seededRandom:Cf,degToRad:Rf,radToDeg:Pf,isPowerOfTwo:Df,ceilPowerOfTwo:Lf,floorPowerOfTwo:Uf,setQuaternionFromProperEuler:If,normalize:un,denormalize:Us};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,e,n,s,r,a,o,l,c){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],d=n[5],v=n[8],M=s[0],m=s[3],f=s[6],y=s[1],b=s[4],g=s[7],A=s[2],E=s[5],w=s[8];return r[0]=a*M+o*y+l*A,r[3]=a*m+o*b+l*E,r[6]=a*f+o*g+l*w,r[1]=c*M+u*y+h*A,r[4]=c*m+u*b+h*E,r[7]=c*f+u*g+h*w,r[2]=p*M+d*y+v*A,r[5]=p*m+d*b+v*E,r[8]=p*f+d*g+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,p=o*l-u*r,d=c*r-a*l,v=e*h+n*p+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=h*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=p*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=d*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new re;function Kh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ca(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nf(){const i=Ca("canvas");return i.style.display="block",i}const dc={};function fr(i){i in dc||(dc[i]=!0,console.warn(i))}function Ff(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Of(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ge={enabled:!0,workingColorSpace:js,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ye&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ye&&(i.r=zs(i.r),i.g=zs(i.g),i.b=zs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ii?Ia:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const pc=[.64,.33,.3,.6,.15,.06],mc=[.2126,.7152,.0722],gc=[.3127,.329],vc=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ge.define({[js]:{primaries:pc,whitePoint:gc,transfer:Ia,toXYZ:vc,fromXYZ:xc,luminanceCoefficients:mc,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:pc,whitePoint:gc,transfer:ye,toXYZ:vc,fromXYZ:xc,luminanceCoefficients:mc,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let xs;class Bf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=Ca("canvas")),xs.width=t.width,xs.height=t.height;const n=xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ca("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kf=0;class Jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Zs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ya(s[a].image)):r.push(Ya(s[a]))}else r=Ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vf=0;class cn extends $s{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,n=ts,s=ts,r=si,a=es,o=In,l=ai,c=cn.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Zs(),this.name="",this.source=new Jh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ti:t.x=t.x-Math.floor(t.x);break;case ts:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ti:t.y=t.y-Math.floor(t.y);break;case ts:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=kh;cn.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],p=l[1],d=l[5],v=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+M)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,g=(d+1)/2,A=(f+1)/2,E=(u+p)/4,w=(h+M)/4,T=(v+m)/4;return b>g&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=w/n):g>A?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=E/s,r=T/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=T/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-v)*(m-v)+(h-M)*(h-M)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(h-M)/y,this.z=(p-u)/y,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gf extends $s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends Gf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qh extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hf extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const p=r[a+0],d=r[a+1],v=r[a+2],M=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=p,t[e+1]=d,t[e+2]=v,t[e+3]=M;return}if(h!==M||l!==p||c!==d||u!==v){let m=1-o;const f=l*p+c*d+u*v+h*M,y=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const A=Math.sqrt(b),E=Math.atan2(A,f*y);m=Math.sin(m*E)/A,o=Math.sin(o*E)/A}const g=o*y;if(l=l*m+p*g,c=c*m+d*g,u=u*m+v*g,h=h*m+M*g,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],p=r[a+1],d=r[a+2],v=r[a+3];return t[e]=o*v+u*h+l*d-c*p,t[e+1]=l*v+u*p+c*h-o*d,t[e+2]=c*v+u*d+o*p-l*h,t[e+3]=u*v-o*h-l*p-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),p=l(n/2),d=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=p*u*h+c*d*v,this._y=c*d*h-p*u*v,this._z=c*u*v+p*d*h,this._w=c*u*h-p*d*v;break;case"YXZ":this._x=p*u*h+c*d*v,this._y=c*d*h-p*u*v,this._z=c*u*v-p*d*h,this._w=c*u*h+p*d*v;break;case"ZXY":this._x=p*u*h-c*d*v,this._y=c*d*h+p*u*v,this._z=c*u*v+p*d*h,this._w=c*u*h-p*d*v;break;case"ZYX":this._x=p*u*h-c*d*v,this._y=c*d*h+p*u*v,this._z=c*u*v-p*d*h,this._w=c*u*h+p*d*v;break;case"YZX":this._x=p*u*h+c*d*v,this._y=c*d*h+p*u*v,this._z=c*u*v-p*d*h,this._w=c*u*h-p*d*v;break;case"XZY":this._x=p*u*h-c*d*v,this._y=c*d*h-p*u*v,this._z=c*u*v+p*d*h,this._w=c*u*h+p*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],p=n+o+h;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_c.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new F,_c=new Lr;class hs{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),Fr.subVectors(this.max,ir),_s.subVectors(t.a,ir),Ms.subVectors(t.b,ir),ys.subVectors(t.c,ir),Ci.subVectors(Ms,_s),Ri.subVectors(ys,Ms),Hi.subVectors(_s,ys);let e=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-Hi.z,Hi.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,Hi.z,0,-Hi.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-Hi.y,Hi.x,0];return!$a(e,_s,Ms,ys,Fr)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,_s,Ms,ys,Fr))?!1:(zr.crossVectors(Ci,Ri),e=[zr.x,zr.y,zr.z],$a(e,_s,Ms,ys,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const di=[new F,new F,new F,new F,new F,new F,new F,new F],Hn=new F,Nr=new hs,_s=new F,Ms=new F,ys=new F,Ci=new F,Ri=new F,Hi=new F,ir=new F,Fr=new F,zr=new F,Wi=new F;function $a(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Wi.fromArray(i,r);const o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Wf=new hs,sr=new F,Za=new F;class Ks{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(Za)),this.expandByPoint(sr.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new F,Ka=new F,Or=new F,Pi=new F,Ja=new F,Br=new F,Qa=new F;class Vl{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ka.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(Ka);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Or),o=Pi.dot(this.direction),l=-Pi.dot(Or),c=Pi.lengthSq(),u=Math.abs(1-a*a);let h,p,d,v;if(u>0)if(h=a*l-o,p=a*o-l,v=r*u,h>=0)if(p>=-v)if(p<=v){const M=1/u;h*=M,p*=M,d=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=r,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*l)+c;else p<=-v?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+p*(p+2*l)+c):p<=v?(h=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+p*(p+2*l)+c);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ka).addScaledVector(Or,p),d}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(o=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,s,r){Ja.subVectors(e,t),Br.subVectors(n,t),Qa.crossVectors(Ja,Br);let a=this.direction.dot(Qa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,t);const l=o*this.direction.dot(Br.crossVectors(Pi,Br));if(l<0)return null;const c=o*this.direction.dot(Ja.cross(Pi));if(c<0||l+c>a)return null;const u=-o*Pi.dot(Qa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,s,r,a,o,l,c,u,h,p,d,v,M,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,h,p,d,v,M,m)}set(t,e,n,s,r,a,o,l,c,u,h,p,d,v,M,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=v,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ss.setFromMatrixColumn(t,0).length(),r=1/Ss.setFromMatrixColumn(t,1).length(),a=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const p=a*u,d=a*h,v=o*u,M=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+v*c,e[5]=p-M*c,e[9]=-o*l,e[2]=M-p*c,e[6]=v+d*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*u,d=l*h,v=c*u,M=c*h;e[0]=p+M*o,e[4]=v*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-v,e[6]=M+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*u,d=l*h,v=c*u,M=c*h;e[0]=p-M*o,e[4]=-a*h,e[8]=v+d*o,e[1]=d+v*o,e[5]=a*u,e[9]=M-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*u,d=a*h,v=o*u,M=o*h;e[0]=l*u,e[4]=v*c-d,e[8]=p*c+M,e[1]=l*h,e[5]=M*c+p,e[9]=d*c-v,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,d=a*c,v=o*l,M=o*c;e[0]=l*u,e[4]=M-p*h,e[8]=v*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+v,e[10]=p-M*h}else if(t.order==="XZY"){const p=a*l,d=a*c,v=o*l,M=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=p*h+M,e[5]=a*u,e[9]=d*h-v,e[2]=v*h-d,e[6]=o*u,e[10]=M*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xf,t,qf)}lookAt(t,e,n){const s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Di.crossVectors(n,bn),Di.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Di.crossVectors(n,bn)),Di.normalize(),kr.crossVectors(bn,Di),s[0]=Di.x,s[4]=kr.x,s[8]=bn.x,s[1]=Di.y,s[5]=kr.y,s[9]=bn.y,s[2]=Di.z,s[6]=kr.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],d=n[13],v=n[2],M=n[6],m=n[10],f=n[14],y=n[3],b=n[7],g=n[11],A=n[15],E=s[0],w=s[4],T=s[8],_=s[12],x=s[1],C=s[5],N=s[9],z=s[13],U=s[2],O=s[6],k=s[10],Y=s[14],B=s[3],K=s[7],at=s[11],ct=s[15];return r[0]=a*E+o*x+l*U+c*B,r[4]=a*w+o*C+l*O+c*K,r[8]=a*T+o*N+l*k+c*at,r[12]=a*_+o*z+l*Y+c*ct,r[1]=u*E+h*x+p*U+d*B,r[5]=u*w+h*C+p*O+d*K,r[9]=u*T+h*N+p*k+d*at,r[13]=u*_+h*z+p*Y+d*ct,r[2]=v*E+M*x+m*U+f*B,r[6]=v*w+M*C+m*O+f*K,r[10]=v*T+M*N+m*k+f*at,r[14]=v*_+M*z+m*Y+f*ct,r[3]=y*E+b*x+g*U+A*B,r[7]=y*w+b*C+g*O+A*K,r[11]=y*T+b*N+g*k+A*at,r[15]=y*_+b*z+g*Y+A*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],p=t[10],d=t[14],v=t[3],M=t[7],m=t[11],f=t[15];return v*(+r*l*h-s*c*h-r*o*p+n*c*p+s*o*d-n*l*d)+M*(+e*l*d-e*c*p+r*a*p-s*a*d+s*c*u-r*l*u)+m*(+e*c*h-e*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+f*(-s*o*u-e*l*h+e*o*p+s*a*h-n*a*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],p=t[10],d=t[11],v=t[12],M=t[13],m=t[14],f=t[15],y=h*m*c-M*p*c+M*l*d-o*m*d-h*l*f+o*p*f,b=v*p*c-u*m*c-v*l*d+a*m*d+u*l*f-a*p*f,g=u*M*c-v*h*c+v*o*d-a*M*d-u*o*f+a*h*f,A=v*h*l-u*M*l-v*o*p+a*M*p+u*o*m-a*h*m,E=e*y+n*b+s*g+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=y*w,t[1]=(M*p*r-h*m*r-M*s*d+n*m*d+h*s*f-n*p*f)*w,t[2]=(o*m*r-M*l*r+M*s*c-n*m*c-o*s*f+n*l*f)*w,t[3]=(h*l*r-o*p*r-h*s*c+n*p*c+o*s*d-n*l*d)*w,t[4]=b*w,t[5]=(u*m*r-v*p*r+v*s*d-e*m*d-u*s*f+e*p*f)*w,t[6]=(v*l*r-a*m*r-v*s*c+e*m*c+a*s*f-e*l*f)*w,t[7]=(a*p*r-u*l*r+u*s*c-e*p*c-a*s*d+e*l*d)*w,t[8]=g*w,t[9]=(v*h*r-u*M*r-v*n*d+e*M*d+u*n*f-e*h*f)*w,t[10]=(a*M*r-v*o*r+v*n*c-e*M*c-a*n*f+e*o*f)*w,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*d-e*o*d)*w,t[12]=A*w,t[13]=(u*M*s-v*h*s+v*n*p-e*M*p-u*n*m+e*h*m)*w,t[14]=(v*o*s-a*M*s-v*n*l+e*M*l+a*n*m-e*o*m)*w,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*p+e*o*p)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,p=r*c,d=r*u,v=r*h,M=a*u,m=a*h,f=o*h,y=l*c,b=l*u,g=l*h,A=n.x,E=n.y,w=n.z;return s[0]=(1-(M+f))*A,s[1]=(d+g)*A,s[2]=(v-b)*A,s[3]=0,s[4]=(d-g)*E,s[5]=(1-(p+f))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(v+b)*w,s[9]=(m-y)*w,s[10]=(1-(p+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ss.set(s[0],s[1],s[2]).length();const a=Ss.set(s[4],s[5],s[6]).length(),o=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Wn.copy(this);const c=1/r,u=1/a,h=1/o;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,e.setFromRotationMatrix(Wn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Si){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s);let d,v;if(o===Si)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Aa)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Si){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),p=(e+t)*c,d=(n+s)*u;let v,M;if(o===Si)v=(a+r)*h,M=-2*h;else if(o===Aa)v=r*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ss=new F,Wn=new ve,Xf=new F(0,0,0),qf=new F(1,1,1),Di=new F,kr=new F,bn=new F,Mc=new ve,yc=new Lr;class oi{constructor(t=0,e=0,n=0,s=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yc.setFromEuler(this),this.setFromQuaternion(yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Gl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yf=0;const Sc=new F,bs=new Lr,mi=new ve,Vr=new F,rr=new F,jf=new F,$f=new Lr,bc=new F(1,0,0),wc=new F(0,1,0),Ec=new F(0,0,1),Tc={type:"added"},Zf={type:"removed"},ws={type:"childadded",child:null},to={type:"childremoved",child:null};class Ce extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new F,e=new oi,n=new Lr,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new re}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(wc,t)}rotateZ(t){return this.rotateOnAxis(Ec,t)}translateOnAxis(t,e){return Sc.copy(t).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(wc,t)}translateZ(t){return this.translateOnAxis(Ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(rr,Vr,this.up):mi.lookAt(Vr,rr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(mi),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tc),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf),to.child=t,this.dispatchEvent(to),to.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tc),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,$f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),p=a(t.skeletons),d=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new F(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new F,gi=new F,eo=new F,vi=new F,Es=new F,Ts=new F,Ac=new F,no=new F,io=new F,so=new F,ro=new Ae,ao=new Ae,oo=new Ae;class Yn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),gi.subVectors(n,e),eo.subVectors(t,e);const a=Xn.dot(Xn),o=Xn.dot(gi),l=Xn.dot(eo),c=gi.dot(gi),u=gi.dot(eo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const p=1/h,d=(c*l-o*u)*p,v=(a*u-o*l)*p;return r.set(1-d-v,v,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ro.setScalar(0),ao.setScalar(0),oo.setScalar(0),ro.fromBufferAttribute(t,e),ao.fromBufferAttribute(t,n),oo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ro,r.x),a.addScaledVector(ao,r.y),a.addScaledVector(oo,r.z),a}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),gi.subVectors(t,e),Xn.cross(gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Xn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Es.subVectors(s,n),Ts.subVectors(r,n),no.subVectors(t,n);const l=Es.dot(no),c=Ts.dot(no);if(l<=0&&c<=0)return e.copy(n);io.subVectors(t,s);const u=Es.dot(io),h=Ts.dot(io);if(u>=0&&h<=u)return e.copy(s);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Es,a);so.subVectors(t,r);const d=Es.dot(so),v=Ts.dot(so);if(v>=0&&d<=v)return e.copy(r);const M=d*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),e.copy(n).addScaledVector(Ts,o);const m=u*v-d*h;if(m<=0&&h-u>=0&&d-v>=0)return Ac.subVectors(r,s),o=(h-u)/(h-u+(d-v)),e.copy(s).addScaledVector(Ac,o);const f=1/(m+M+p);return a=M*f,o=p*f,e.copy(n).addScaledVector(Es,a).addScaledVector(Ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function lo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=kl(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=lo(a,r,t+1/3),this.g=lo(a,r,t),this.b=lo(a,r,t-1/3)}return ge.toWorkingColorSpace(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ge.fromWorkingColorSpace(nn.copy(this),t),Math.round($e(nn.r*255,0,255))*65536+Math.round($e(nn.g*255,0,255))*256+Math.round($e(nn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=rn){ge.fromWorkingColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,s=nn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(Gr);const n=gr(Li.h,Gr.h,e),s=gr(Li.s,Gr.s,e),r=gr(Li.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new wt;wt.NAMES=tu;let Kf=0;class us extends $s{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Zs(),this.name="",this.blending=Oi,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=No,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Io&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class be extends us{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new F,Hr=new Tt;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Us(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Us(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Us(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}}class eu extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nu extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jf=0;const Pn=new ve,co=new Ce,As=new F,wn=new hs,ar=new hs,qe=new F;class Re extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kh(t)?nu:eu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return co.lookAt(t),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(wn.min,ar.min),wn.expandByPoint(qe),qe.addVectors(wn.max,ar.max),wn.expandByPoint(qe)):(wn.expandByPoint(ar.min),wn.expandByPoint(ar.max))}wn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)qe.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(t,c),qe.add(As)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new F,l[T]=new F;const c=new F,u=new F,h=new F,p=new Tt,d=new Tt,v=new Tt,M=new F,m=new F;function f(T,_,x){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,x),p.fromBufferAttribute(r,T),d.fromBufferAttribute(r,_),v.fromBufferAttribute(r,x),u.sub(c),h.sub(c),d.sub(p),v.sub(p);const C=1/(d.x*v.y-v.x*d.y);isFinite(C)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(C),o[T].add(M),o[_].add(M),o[x].add(M),l[T].add(m),l[_].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let T=0,_=y.length;T<_;++T){const x=y[T],C=x.start,N=x.count;for(let z=C,U=C+N;z<U;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new F,g=new F,A=new F,E=new F;function w(T){A.fromBufferAttribute(s,T),E.copy(A);const _=o[T];b.copy(_),b.sub(A.multiplyScalar(A.dot(_))).normalize(),g.crossVectors(E,_);const C=g.dot(l[T])<0?-1:1;a.setXYZW(T,b.x,b.y,b.z,C)}for(let T=0,_=y.length;T<_;++T){const x=y[T],C=x.start,N=x.count;for(let z=C,U=C+N;z<U;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(t)for(let p=0,d=t.count;p<d;p+=3){const v=t.getX(p+0),M=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,p=new c.constructor(l.length*u);let d=0,v=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*u;for(let f=0;f<u;f++)p[v++]=c[d++]}return new ze(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const p=c[u],d=t(p,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new ve,Xi=new Vl,Wr=new Ks,Rc=new F,Xr=new F,qr=new F,Yr=new F,ho=new F,jr=new F,Pc=new F,$r=new F;class Jt extends Ce{constructor(t=new Re,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ho.fromBufferAttribute(h,t),a?jr.addScaledVector(ho,u):jr.addScaledVector(ho.sub(e),u))}e.add(jr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(Wr.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Wr,Rc)===null||Xi.origin.distanceToSquared(Rc)>(t.far-t.near)**2))&&(Cc.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=p.length;v<M;v++){const m=p[v],f=a[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let g=y,A=b;g<A;g+=3){const E=o.getX(g),w=o.getX(g+1),T=o.getX(g+2);s=Zr(this,f,t,n,c,u,h,E,w,T),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=v,f=M;m<f;m+=3){const y=o.getX(m),b=o.getX(m+1),g=o.getX(m+2);s=Zr(this,a,t,n,c,u,h,y,b,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=p.length;v<M;v++){const m=p[v],f=a[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let g=y,A=b;g<A;g+=3){const E=g,w=g+1,T=g+2;s=Zr(this,f,t,n,c,u,h,E,w,T),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=v,f=M;m<f;m+=3){const y=m,b=m+1,g=m+2;s=Zr(this,a,t,n,c,u,h,y,b,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Qf(i,t,e,n,s,r,a,o){let l;if(t.side===xn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Vi,o),l===null)return null;$r.copy(o),$r.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($r);return c<e.near||c>e.far?null:{distance:c,point:$r.clone(),object:i}}function Zr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Xr),i.getVertexPosition(l,qr),i.getVertexPosition(c,Yr);const u=Qf(i,t,e,n,Xr,qr,Yr,Pc);if(u){const h=new F;Yn.getBarycoord(Pc,Xr,qr,Yr,h),s&&(u.uv=Yn.getInterpolatedAttribute(s,o,l,c,h,new Tt)),r&&(u.uv1=Yn.getInterpolatedAttribute(r,o,l,c,h,new Tt)),a&&(u.normal=Yn.getInterpolatedAttribute(a,o,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new F,materialIndex:0};Yn.getNormal(Xr,qr,Yr,p.normal),u.face=p,u.barycoord=h}return u}class En extends Re{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let p=0,d=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(h,2));function v(M,m,f,y,b,g,A,E,w,T,_){const x=g/w,C=A/T,N=g/2,z=A/2,U=E/2,O=w+1,k=T+1;let Y=0,B=0;const K=new F;for(let at=0;at<k;at++){const ct=at*C-z;for(let vt=0;vt<O;vt++){const Xt=vt*x-N;K[M]=Xt*y,K[m]=ct*b,K[f]=U,c.push(K.x,K.y,K.z),K[M]=0,K[m]=0,K[f]=E>0?1:-1,u.push(K.x,K.y,K.z),h.push(vt/w),h.push(1-at/T),Y+=1}}for(let at=0;at<T;at++)for(let ct=0;ct<w;ct++){const vt=p+ct+O*at,Xt=p+ct+O*(at+1),et=p+(ct+1)+O*(at+1),ht=p+(ct+1)+O*at;l.push(vt,Xt,ht),l.push(Xt,et,ht),B+=6}o.addGroup(d,B,_),d+=B,p+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function fn(i){const t={};for(let e=0;e<i.length;e++){const n=Xs(i[e]);for(const s in n)t[s]=n[s]}return t}function td(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function iu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const jn={clone:Xs,merge:fn};var ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ne extends us{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=td(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class su extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new F,Dc=new Tt,Lc=new Tt;class Tn extends su{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,Dc,Lc),e.subVectors(Lc,Dc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cs=-90,Rs=1;class id extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Cs,Rs,t,e);s.layers=this.layers,this.add(s);const r=new Tn(Cs,Rs,t,e);r.layers=this.layers,this.add(r);const a=new Tn(Cs,Rs,t,e);a.layers=this.layers,this.add(a);const o=new Tn(Cs,Rs,t,e);o.layers=this.layers,this.add(o);const l=new Tn(Cs,Rs,t,e);l.layers=this.layers,this.add(l);const c=new Tn(Cs,Rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,p,d),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ru extends cn{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Hs,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sd extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ru(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new En(5,5,5),r=new Ne({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Je});r.uniforms.tEquirect.value=e;const a=new Jt(s,r),o=e.minFilter;return e.minFilter===es&&(e.minFilter=si),new id(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const uo=new F,rd=new F,ad=new re;class Ki{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=uo.subVectors(n,e).cross(rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(uo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ad.getNormalMatrix(t),s=this.coplanarPoint(uo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Ks,Kr=new F;class Hl{constructor(t=new Ki,e=new Ki,n=new Ki,s=new Ki,r=new Ki,a=new Ki){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],p=s[7],d=s[8],v=s[9],M=s[10],m=s[11],f=s[12],y=s[13],b=s[14],g=s[15];if(n[0].setComponents(l-r,p-c,m-d,g-f).normalize(),n[1].setComponents(l+r,p+c,m+d,g+f).normalize(),n[2].setComponents(l+a,p+u,m+v,g+y).normalize(),n[3].setComponents(l-a,p-u,m-v,g-y).normalize(),n[4].setComponents(l-o,p-h,m-M,g-b).normalize(),e===Si)n[5].setComponents(l+o,p+h,m+M,g+b).normalize();else if(e===Aa)n[5].setComponents(o,h,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Kr.x=s.normal.x>0?t.max.x:t.min.x,Kr.y=s.normal.y>0?t.max.y:t.min.y,Kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function au(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function od(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,v)=>d.start-v.start);let p=0;for(let d=1;d<h.length;d++){const v=h[p],M=h[d];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++p,h[p]=M)}h.length=p+1;for(let d=0,v=h.length;d<v;d++){const M=h[d];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Jn extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,p=e/l,d=[],v=[],M=[],m=[];for(let f=0;f<u;f++){const y=f*p-a;for(let b=0;b<c;b++){const g=b*h-r;v.push(g,-y,0),M.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const b=y+c*f,g=y+c*(f+1),A=y+1+c*(f+1),E=y+1+c*f;d.push(b,g,E),d.push(g,A,E)}this.setIndex(d),this.setAttribute("position",new se(v,3)),this.setAttribute("normal",new se(M,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.width,t.height,t.widthSegments,t.heightSegments)}}var ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cd=`#ifdef USE_ALPHAHASH
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
#endif`,hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pd=`#ifdef USE_AOMAP
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
#endif`,md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gd=`#ifdef USE_BATCHING
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
#endif`,vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yd=`#ifdef USE_IRIDESCENCE
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
#endif`,Sd=`#ifdef USE_BUMPMAP
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dd=`#define PI 3.141592653589793
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
} // validated`,Ld=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ud=`vec3 transformedNormal = objectNormal;
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
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$d=`#ifdef USE_GRADIENTMAP
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
}`,Zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qd=`uniform bool receiveShadow;
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
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
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
#endif`,ap=`struct PhysicalMaterial {
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
}`,op=`
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qp=`float getShadowMask() {
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
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`uniform sampler2D t2D;
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
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
}`,pm=`#if DEPTH_PACKING == 3200
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
}`,mm=`#define DISTANCE
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
}`,gm=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`uniform float scale;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,Sm=`uniform vec3 diffuse;
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
}`,bm=`#define LAMBERT
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
}`,wm=`#define LAMBERT
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
}`,Em=`#define MATCAP
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
}`,Tm=`#define MATCAP
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
}`,Am=`#define NORMAL
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
}`,Cm=`#define NORMAL
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
}`,Rm=`#define PHONG
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
}`,Pm=`#define PHONG
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
}`,Dm=`#define STANDARD
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
}`,Lm=`#define STANDARD
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
}`,Um=`#define TOON
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
}`,Im=`#define TOON
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
}`,Nm=`uniform float size;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Om=`uniform vec3 color;
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
}`,Bm=`uniform float rotation;
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
}`,km=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:ld,alphahash_pars_fragment:cd,alphamap_fragment:hd,alphamap_pars_fragment:ud,alphatest_fragment:fd,alphatest_pars_fragment:dd,aomap_fragment:pd,aomap_pars_fragment:md,batching_pars_vertex:gd,batching_vertex:vd,begin_vertex:xd,beginnormal_vertex:_d,bsdfs:Md,iridescence_fragment:yd,bumpmap_pars_fragment:Sd,clipping_planes_fragment:bd,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Ed,clipping_planes_vertex:Td,color_fragment:Ad,color_pars_fragment:Cd,color_pars_vertex:Rd,color_vertex:Pd,common:Dd,cube_uv_reflection_fragment:Ld,defaultnormal_vertex:Ud,displacementmap_pars_vertex:Id,displacementmap_vertex:Nd,emissivemap_fragment:Fd,emissivemap_pars_fragment:zd,colorspace_fragment:Od,colorspace_pars_fragment:Bd,envmap_fragment:kd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Gd,envmap_pars_vertex:Hd,envmap_physical_pars_fragment:tp,envmap_vertex:Wd,fog_vertex:Xd,fog_pars_vertex:qd,fog_fragment:Yd,fog_pars_fragment:jd,gradientmap_pars_fragment:$d,lightmap_pars_fragment:Zd,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:Jd,lights_pars_begin:Qd,lights_toon_fragment:ep,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:lp,lights_fragment_end:cp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:fp,logdepthbuf_vertex:dp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:vp,metalnessmap_fragment:xp,metalnessmap_pars_fragment:_p,morphinstance_vertex:Mp,morphcolor_vertex:yp,morphnormal_vertex:Sp,morphtarget_pars_vertex:bp,morphtarget_vertex:wp,normal_fragment_begin:Ep,normal_fragment_maps:Tp,normal_pars_fragment:Ap,normal_pars_vertex:Cp,normal_vertex:Rp,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Ip,opaque_fragment:Np,packing:Fp,premultiplied_alpha_fragment:zp,project_vertex:Op,dithering_fragment:Bp,dithering_pars_fragment:kp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Wp,shadowmap_vertex:Xp,shadowmask_pars_fragment:qp,skinbase_vertex:Yp,skinning_pars_vertex:jp,skinning_vertex:$p,skinnormal_vertex:Zp,specularmap_fragment:Kp,specularmap_pars_fragment:Jp,tonemapping_fragment:Qp,tonemapping_pars_fragment:tm,transmission_fragment:em,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:sm,uv_vertex:rm,worldpos_vertex:am,background_vert:om,background_frag:lm,backgroundCube_vert:cm,backgroundCube_frag:hm,cube_vert:um,cube_frag:fm,depth_vert:dm,depth_frag:pm,distanceRGBA_vert:mm,distanceRGBA_frag:gm,equirect_vert:vm,equirect_frag:xm,linedashed_vert:_m,linedashed_frag:Mm,meshbasic_vert:ym,meshbasic_frag:Sm,meshlambert_vert:bm,meshlambert_frag:wm,meshmatcap_vert:Em,meshmatcap_frag:Tm,meshnormal_vert:Am,meshnormal_frag:Cm,meshphong_vert:Rm,meshphong_frag:Pm,meshphysical_vert:Dm,meshphysical_frag:Lm,meshtoon_vert:Um,meshtoon_frag:Im,points_vert:Nm,points_frag:Fm,shadow_vert:zm,shadow_frag:Om,sprite_vert:Bm,sprite_frag:km},Pt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},ii={basic:{uniforms:fn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:fn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new wt(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:fn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:fn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:fn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new wt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:fn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:fn([Pt.points,Pt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:fn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:fn([Pt.common,Pt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:fn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:fn([Pt.sprite,Pt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:fn([Pt.common,Pt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:fn([Pt.lights,Pt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};ii.physical={uniforms:fn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const Jr={r:0,b:0,g:0},Yi=new oi,Vm=new ve;function Gm(i,t,e,n,s,r,a){const o=new wt(0);let l=r===!0?0:1,c,u,h=null,p=0,d=null;function v(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?e:t).get(b)),b}function M(y){let b=!1;const g=v(y);g===null?f(o,l):g&&g.isColor&&(f(g,1),b=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,b){const g=v(b);g&&(g.isCubeTexture||g.mapping===La)?(u===void 0&&(u=new Jt(new En(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:Xs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Yi.copy(b.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(Yi)),u.material.toneMapped=ge.getTransfer(g.colorSpace)!==ye,(h!==g||p!==g.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,p=g.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Jt(new Jn(2,2),new Ne({name:"BackgroundMaterial",uniforms:Xs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ge.getTransfer(g.colorSpace)!==ye,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||p!==g.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=g,p=g.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,b){y.getRGB(Jr,iu(i)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:M,addToRenderList:m}}function Hm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(x,C,N,z,U){let O=!1;const k=h(z,N,C);r!==k&&(r=k,c(r.object)),O=d(x,z,N,U),O&&v(x,z,N,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,g(x,C,N,z),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,C,N){const z=N.wireframe===!0;let U=n[x.id];U===void 0&&(U={},n[x.id]=U);let O=U[C.id];O===void 0&&(O={},U[C.id]=O);let k=O[z];return k===void 0&&(k=p(l()),O[z]=k),k}function p(x){const C=[],N=[],z=[];for(let U=0;U<e;U++)C[U]=0,N[U]=0,z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:z,object:x,attributes:{},index:null}}function d(x,C,N,z){const U=r.attributes,O=C.attributes;let k=0;const Y=N.getAttributes();for(const B in Y)if(Y[B].location>=0){const at=U[B];let ct=O[B];if(ct===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor)),at===void 0||at.attribute!==ct||ct&&at.data!==ct.data)return!0;k++}return r.attributesNum!==k||r.index!==z}function v(x,C,N,z){const U={},O=C.attributes;let k=0;const Y=N.getAttributes();for(const B in Y)if(Y[B].location>=0){let at=O[B];at===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(at=x.instanceColor));const ct={};ct.attribute=at,at&&at.data&&(ct.data=at.data),U[B]=ct,k++}r.attributes=U,r.attributesNum=k,r.index=z}function M(){const x=r.newAttributes;for(let C=0,N=x.length;C<N;C++)x[C]=0}function m(x){f(x,0)}function f(x,C){const N=r.newAttributes,z=r.enabledAttributes,U=r.attributeDivisors;N[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),U[x]!==C&&(i.vertexAttribDivisor(x,C),U[x]=C)}function y(){const x=r.newAttributes,C=r.enabledAttributes;for(let N=0,z=C.length;N<z;N++)C[N]!==x[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function b(x,C,N,z,U,O,k){k===!0?i.vertexAttribIPointer(x,C,N,U,O):i.vertexAttribPointer(x,C,N,z,U,O)}function g(x,C,N,z){M();const U=z.attributes,O=N.getAttributes(),k=C.defaultAttributeValues;for(const Y in O){const B=O[Y];if(B.location>=0){let K=U[Y];if(K===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const at=K.normalized,ct=K.itemSize,vt=t.get(K);if(vt===void 0)continue;const Xt=vt.buffer,et=vt.type,ht=vt.bytesPerElement,xt=et===i.INT||et===i.UNSIGNED_INT||K.gpuType===Ul;if(K.isInterleavedBufferAttribute){const dt=K.data,Lt=dt.stride,Ft=K.offset;if(dt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<B.locationSize;Wt++)f(B.location+Wt,dt.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Wt=0;Wt<B.locationSize;Wt++)m(B.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Wt=0;Wt<B.locationSize;Wt++)b(B.location+Wt,ct/B.locationSize,et,at,Lt*ht,(Ft+ct/B.locationSize*Wt)*ht,xt)}else{if(K.isInstancedBufferAttribute){for(let dt=0;dt<B.locationSize;dt++)f(B.location+dt,K.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let dt=0;dt<B.locationSize;dt++)m(B.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let dt=0;dt<B.locationSize;dt++)b(B.location+dt,ct/B.locationSize,et,at,ct*ht,ct/B.locationSize*dt*ht,xt)}}else if(k!==void 0){const at=k[Y];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(B.location,at);break;case 3:i.vertexAttrib3fv(B.location,at);break;case 4:i.vertexAttrib4fv(B.location,at);break;default:i.vertexAttrib1fv(B.location,at)}}}}y()}function A(){T();for(const x in n){const C=n[x];for(const N in C){const z=C[N];for(const U in z)u(z[U].object),delete z[U];delete C[N]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const N in C){const z=C[N];for(const U in z)u(z[U].object),delete z[U];delete C[N]}delete n[x.id]}function w(x){for(const C in n){const N=n[C];if(N[x.id]===void 0)continue;const z=N[x.id];for(const U in z)u(z[U].object),delete z[U];delete N[x.id]}}function T(){_(),a=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:_,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function Wm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let v=0;v<h;v++)d+=u[v];e.update(d,n,1)}function l(c,u,h,p){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<c.length;v++)a(c[v],u[v],p[v]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,h);let v=0;for(let M=0;M<h;M++)v+=u[M]*p[M];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==In&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const T=w===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ai&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$n&&!T)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:g,vertexTextures:A,maxSamples:E}}function qm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Ki,o=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const d=h.length!==0||p||n!==0||s;return s=p,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){e=u(h,p,0)},this.setState=function(h,p,d){const v=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,b=y*4;let g=f.clippingState||null;l.value=g,g=u(v,p,b,d);for(let A=0;A!==b;++A)g[A]=e[A];f.clippingState=g,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,p,d,v){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,v!==!0||m===null){const f=d+M*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,g=d;b!==M;++b,g+=4)a.copy(h[b]).applyMatrix4(y,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function Ym(i){let t=new WeakMap;function e(a,o){return o===Xo?a.mapping=Hs:o===qo&&(a.mapping=Ws),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xo||o===qo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wl extends su{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Is=4,Uc=[.125,.215,.35,.446,.526,.582],Qi=20,fo=new Wl,Ic=new wt;let po=null,mo=0,go=0,vo=!1;const Ji=(1+Math.sqrt(5))/2,Ps=1/Ji,Nc=[new F(-Ji,Ps,0),new F(Ji,Ps,0),new F(-Ps,0,Ji),new F(Ps,0,Ji),new F(0,Ji,-Ps),new F(0,Ji,Ps),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(po,mo,go),this._renderer.xr.enabled=vo,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:si,minFilter:si,generateMipmaps:!1,type:Fn,format:In,colorSpace:js,depthBuffer:!1},s=zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jm(r)),this._blurMaterial=$m(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,fo)}_sceneToCubeUV(t,e,n,s){const o=new Tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Ic),u.toneMapping=Bi,u.autoClear=!1;const d=new be({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),v=new Jt(new En,d);let M=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,M=!0):(d.color.copy(Ic),M=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const b=this._cubeSize;Qr(s,y*b,f>2?b:0,b,b),u.setRenderTarget(s),M&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Hs||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Qr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,fo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nc[(s-r-1)%Nc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jt(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Qi-1),M=r/v,m=isFinite(r)?1+Math.floor(u*M):Qi;m>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const f=[];let y=0;for(let w=0;w<Qi;++w){const T=w/M,_=Math.exp(-T*T/2);f.push(_),w===0?y+=_:w<m&&(y+=2*_)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:b}=this;p.dTheta.value=v,p.mipInt.value=b-n;const g=this._sizeLods[s],A=3*g*(s>b-Is?s-b+Is:0),E=4*(this._cubeSize-g);Qr(e,A,E,3*g,2*g),l.setRenderTarget(e),l.render(h,fo)}}function jm(i){const t=[],e=[],n=[];let s=i;const r=i-Is+1+Uc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Is?l=Uc[a-i+Is-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,v=6,M=3,m=2,f=1,y=new Float32Array(M*v*d),b=new Float32Array(m*v*d),g=new Float32Array(f*v*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,T=E>2?0:-1,_=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];y.set(_,M*v*E),b.set(p,m*v*E);const x=[E,E,E,E,E,E];g.set(x,f*v*E)}const A=new Re;A.setAttribute("position",new ze(y,M)),A.setAttribute("uv",new ze(b,m)),A.setAttribute("faceIndex",new ze(g,f)),t.push(A),s>Is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zc(i,t,e){const n=new _n(i,t,e);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $m(i,t,e){const n=new Float32Array(Qi),s=new F(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function Oc(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function Bc(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Je,depthTest:!1,depthWrite:!1})}function Xl(){return`

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
	`}function Zm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Xo||l===qo,u=l===Hs||l===Ws;if(c||u){let h=t.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Fc(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Fc(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jm(i,t,e,n){const s={},r=new WeakMap;function a(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const v in p.attributes)t.remove(p.attributes[v]);for(const v in p.morphAttributes){const M=p.morphAttributes[v];for(let m=0,f=M.length;m<f;m++)t.remove(M[m])}p.removeEventListener("dispose",a),delete s[p.id];const d=r.get(p);d&&(t.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(h,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function l(h){const p=h.attributes;for(const v in p)t.update(p[v],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const v in d){const M=d[v];for(let m=0,f=M.length;m<f;m++)t.update(M[m],i.ARRAY_BUFFER)}}function c(h){const p=[],d=h.index,v=h.attributes.position;let M=0;if(d!==null){const y=d.array;M=d.version;for(let b=0,g=y.length;b<g;b+=3){const A=y[b+0],E=y[b+1],w=y[b+2];p.push(A,E,E,w,w,A)}}else if(v!==void 0){const y=v.array;M=v.version;for(let b=0,g=y.length/3-1;b<g;b+=3){const A=b+0,E=b+1,w=b+2;p.push(A,E,E,w,w,A)}}else return;const m=new(Kh(p)?nu:eu)(p,1);m.version=M;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const p=r.get(h);if(p){const d=h.index;d!==null&&p.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Qm(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*a),e.update(d,n,1)}function c(p,d,v){v!==0&&(i.drawElementsInstanced(n,d,r,p*a,v),e.update(d,n,v))}function u(p,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,v);let m=0;for(let f=0;f<v;f++)m+=d[f];e.update(m,n,1)}function h(p,d,v,M){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/a,d[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,M,0,v);let f=0;for(let y=0;y<v;y++)f+=d[y]*M[y];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function t0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function e0(i,t,e){const n=new WeakMap,s=new Ae;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==h){let x=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var d=x;p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let g=0;v===!0&&(g=1),M===!0&&(g=2),m===!0&&(g=3);let A=o.attributes.position.count*g,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const w=new Float32Array(A*E*4*h),T=new Qh(w,A,E,h);T.type=$n,T.needsUpdate=!0;const _=g*4;for(let C=0;C<h;C++){const N=f[C],z=y[C],U=b[C],O=A*E*4*C;for(let k=0;k<N.count;k++){const Y=k*_;v===!0&&(s.fromBufferAttribute(N,k),w[O+Y+0]=s.x,w[O+Y+1]=s.y,w[O+Y+2]=s.z,w[O+Y+3]=0),M===!0&&(s.fromBufferAttribute(z,k),w[O+Y+4]=s.x,w[O+Y+5]=s.y,w[O+Y+6]=s.z,w[O+Y+7]=0),m===!0&&(s.fromBufferAttribute(U,k),w[O+Y+8]=s.x,w[O+Y+9]=s.y,w[O+Y+10]=s.z,w[O+Y+11]=U.itemSize===4?s.w:1)}}p={count:h,texture:T,size:new Tt(A,E)},n.set(o,p),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function n0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class ql extends cn{constructor(t,e,n,s,r,a,o,l,c,u=Fs){if(u!==Fs&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fs&&(n=as),n===void 0&&u===ls&&(n=os),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ou=new cn,kc=new ql(1,1),lu=new Qh,cu=new Hf,hu=new ru,Vc=[],Gc=[],Hc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function Js(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Vc[s];if(r===void 0&&(r=new Float32Array(s),Vc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Na(i,t){let e=Gc[t];e===void 0&&(e=new Int32Array(t),Gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function i0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function o0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),Xe(e,n)}}function l0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),Xe(e,n)}}function c0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Hc.set(n),i.uniformMatrix4fv(this.addr,!1,Hc),Xe(e,n)}}function h0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function p0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function x0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=Zh,r=kc):r=ou,e.setTexture2D(t||r,s)}function _0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cu,s)}function M0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hu,s)}function y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lu,s)}function S0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return a0;case 35674:return o0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return f0;case 35669:case 35673:return d0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return y0}}function b0(i,t){i.uniform1fv(this.addr,t)}function w0(i,t){const e=Js(t,this.size,2);i.uniform2fv(this.addr,e)}function E0(i,t){const e=Js(t,this.size,3);i.uniform3fv(this.addr,e)}function T0(i,t){const e=Js(t,this.size,4);i.uniform4fv(this.addr,e)}function A0(i,t){const e=Js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function C0(i,t){const e=Js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function R0(i,t){const e=Js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function P0(i,t){i.uniform1iv(this.addr,t)}function D0(i,t){i.uniform2iv(this.addr,t)}function L0(i,t){i.uniform3iv(this.addr,t)}function U0(i,t){i.uniform4iv(this.addr,t)}function I0(i,t){i.uniform1uiv(this.addr,t)}function N0(i,t){i.uniform2uiv(this.addr,t)}function F0(i,t){i.uniform3uiv(this.addr,t)}function z0(i,t){i.uniform4uiv(this.addr,t)}function O0(i,t,e){const n=this.cache,s=t.length,r=Na(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ou,r[a])}function B0(i,t,e){const n=this.cache,s=t.length,r=Na(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cu,r[a])}function k0(i,t,e){const n=this.cache,s=t.length,r=Na(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||hu,r[a])}function V0(i,t,e){const n=this.cache,s=t.length,r=Na(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lu,r[a])}function G0(i){switch(i){case 5126:return b0;case 35664:return w0;case 35665:return E0;case 35666:return T0;case 35674:return A0;case 35675:return C0;case 35676:return R0;case 5124:case 35670:return P0;case 35667:case 35671:return D0;case 35668:case 35672:return L0;case 35669:case 35673:return U0;case 5125:return I0;case 36294:return N0;case 36295:return F0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return V0}}class H0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=S0(e.type)}}class W0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G0(e.type)}}class X0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function qc(i,t){i.seq.push(t),i.map[t.id]=t}function q0(i,t,e){const n=i.name,s=n.length;for(xo.lastIndex=0;;){const r=xo.exec(n),a=xo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qc(e,c===void 0?new H0(o,i,t):new W0(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new X0(o),qc(e,h)),e=h}}}class Sa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);q0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Yc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Y0=37297;let j0=0;function $0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const jc=new re;function Z0(i){ge._getMatrix(jc,ge.workingColorSpace,i);const t=`mat3( ${jc.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case Ia:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $c(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$0(i.getShaderSource(t),a)}else return s}function K0(i,t){const e=Z0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function J0(i,t){let e;switch(t){case Nh:e="Linear";break;case Fh:e="Reinhard";break;case zh:e="Cineon";break;case Ll:e="ACESFilmic";break;case Oh:e="AgX";break;case Bh:e="Neutral";break;case of:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ta=new F;function Q0(){ge.getLuminanceCoefficients(ta);const i=ta.x.toFixed(4),t=ta.y.toFixed(4),e=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function eg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ng(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function dr(i){return i!==""}function Zc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(ig,rg)}const sg=new Map;function rg(i,t){let e=le[t];if(e===void 0){const n=sg.get(t);if(n!==void 0)e=le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ml(e)}const ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(i){return i.replace(ag,og)}function og(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function lg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_i&&(t="SHADOWMAP_TYPE_VSM"),t}function cg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hs:case Ws:t="ENVMAP_TYPE_CUBE";break;case La:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function ug(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dl:t="ENVMAP_BLENDING_MULTIPLY";break;case rf:t="ENVMAP_BLENDING_MIX";break;case af:t="ENVMAP_BLENDING_ADD";break}return t}function fg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=lg(e),c=cg(e),u=hg(e),h=ug(e),p=fg(e),d=tg(e),v=eg(r),M=s.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(dr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(dr).join(`
`),f.length>0&&(f+=`
`)):(m=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),f=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?le.tonemapping_pars_fragment:"",e.toneMapping!==Bi?J0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,K0("linearToOutputTexel",e.outputColorSpace),Q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),a=Ml(a),a=Zc(a,e),a=Kc(a,e),o=Ml(o),o=Zc(o,e),o=Kc(o,e),a=Jc(a),o=Jc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=y+m+a,g=y+f+o,A=Yc(s,s.VERTEX_SHADER,b),E=Yc(s,s.FRAGMENT_SHADER,g);s.attachShader(M,A),s.attachShader(M,E),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(M).trim(),z=s.getShaderInfoLog(A).trim(),U=s.getShaderInfoLog(E).trim();let O=!0,k=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,A,E);else{const Y=$c(s,A,"vertex"),B=$c(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+Y+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||U==="")&&(k=!1);k&&(C.diagnostics={runnable:O,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(A),s.deleteShader(E),T=new Sa(s,M),_=ng(s,M)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let _;this.getAttributes=function(){return _===void 0&&w(this),_};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(M,Y0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=E,this}let pg=0;class mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gg(t),e.set(t,n)),n}}class gg{constructor(t){this.id=pg++,this.code=t,this.usedTimes=0}}function vg(i,t,e,n,s,r,a){const o=new Gl,l=new mg,c=new Set,u=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures;let d=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,x,C,N,z){const U=N.fog,O=z.geometry,k=_.isMeshStandardMaterial?N.environment:null,Y=(_.isMeshStandardMaterial?e:t).get(_.envMap||k),B=Y&&Y.mapping===La?Y.image.height:null,K=v[_.type];_.precision!==null&&(d=s.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const at=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ct=at!==void 0?at.length:0;let vt=0;O.morphAttributes.position!==void 0&&(vt=1),O.morphAttributes.normal!==void 0&&(vt=2),O.morphAttributes.color!==void 0&&(vt=3);let Xt,et,ht,xt;if(K){const Bt=ii[K];Xt=Bt.vertexShader,et=Bt.fragmentShader}else Xt=_.vertexShader,et=_.fragmentShader,l.update(_),ht=l.getVertexShaderID(_),xt=l.getFragmentShaderID(_);const dt=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Ft=z.isInstancedMesh===!0,Wt=z.isBatchedMesh===!0,ce=!!_.map,Qt=!!_.matcap,pe=!!Y,W=!!_.aoMap,Ee=!!_.lightMap,te=!!_.bumpMap,$t=!!_.normalMap,Ot=!!_.displacementMap,he=!!_.emissiveMap,j=!!_.metalnessMap,R=!!_.roughnessMap,S=_.anisotropy>0,G=_.clearcoat>0,$=_.dispersion>0,J=_.iridescence>0,Q=_.sheen>0,Et=_.transmission>0,pt=S&&!!_.anisotropyMap,Mt=G&&!!_.clearcoatMap,Kt=G&&!!_.clearcoatNormalMap,gt=G&&!!_.clearcoatRoughnessMap,Ut=J&&!!_.iridescenceMap,qt=J&&!!_.iridescenceThicknessMap,Zt=Q&&!!_.sheenColorMap,Nt=Q&&!!_.sheenRoughnessMap,ne=!!_.specularMap,Yt=!!_.specularColorMap,oe=!!_.specularIntensityMap,V=Et&&!!_.transmissionMap,bt=Et&&!!_.thicknessMap,it=!!_.gradientMap,ut=!!_.alphaMap,At=_.alphaTest>0,Ct=!!_.alphaHash,I=!!_.extensions;let ot=Bi;_.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ot=i.toneMapping);const Dt={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:Xt,fragmentShader:et,defines:_.defines,customVertexShaderID:ht,customFragmentShaderID:xt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Wt,batchingColor:Wt&&z._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&z.instanceColor!==null,instancingMorph:Ft&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:js,alphaToCoverage:!!_.alphaToCoverage,map:ce,matcap:Qt,envMap:pe,envMapMode:pe&&Y.mapping,envMapCubeUVHeight:B,aoMap:W,lightMap:Ee,bumpMap:te,normalMap:$t,displacementMap:p&&Ot,emissiveMap:he,normalMapObjectSpace:$t&&_.normalMapType===uf,normalMapTangentSpace:$t&&_.normalMapType===Bl,metalnessMap:j,roughnessMap:R,anisotropy:S,anisotropyMap:pt,clearcoat:G,clearcoatMap:Mt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:gt,dispersion:$,iridescence:J,iridescenceMap:Ut,iridescenceThicknessMap:qt,sheen:Q,sheenColorMap:Zt,sheenRoughnessMap:Nt,specularMap:ne,specularColorMap:Yt,specularIntensityMap:oe,transmission:Et,transmissionMap:V,thicknessMap:bt,gradientMap:it,opaque:_.transparent===!1&&_.blending===Oi&&_.alphaToCoverage===!1,alphaMap:ut,alphaTest:At,alphaHash:Ct,combine:_.combine,mapUv:ce&&M(_.map.channel),aoMapUv:W&&M(_.aoMap.channel),lightMapUv:Ee&&M(_.lightMap.channel),bumpMapUv:te&&M(_.bumpMap.channel),normalMapUv:$t&&M(_.normalMap.channel),displacementMapUv:Ot&&M(_.displacementMap.channel),emissiveMapUv:he&&M(_.emissiveMap.channel),metalnessMapUv:j&&M(_.metalnessMap.channel),roughnessMapUv:R&&M(_.roughnessMap.channel),anisotropyMapUv:pt&&M(_.anisotropyMap.channel),clearcoatMapUv:Mt&&M(_.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&M(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&M(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&M(_.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&M(_.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&M(_.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&M(_.sheenRoughnessMap.channel),specularMapUv:ne&&M(_.specularMap.channel),specularColorMapUv:Yt&&M(_.specularColorMap.channel),specularIntensityMapUv:oe&&M(_.specularIntensityMap.channel),transmissionMapUv:V&&M(_.transmissionMap.channel),thicknessMapUv:bt&&M(_.thicknessMap.channel),alphaMapUv:ut&&M(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&($t||S),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!O.attributes.uv&&(ce||ut),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Lt,skinning:z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:vt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:ce&&_.map.isVideoTexture===!0&&ge.getTransfer(_.map.colorSpace)===ye,decodeVideoTextureEmissive:he&&_.emissiveMap.isVideoTexture===!0&&ge.getTransfer(_.emissiveMap.colorSpace)===ye,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ze,flipSided:_.side===xn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:I&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(I&&_.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function f(_){const x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)x.push(C),x.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(y(x,_),b(x,_),x.push(i.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function y(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function b(_,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),_.push(o.mask)}function g(_){const x=v[_.type];let C;if(x){const N=ii[x];C=jn.clone(N.uniforms)}else C=_.uniforms;return C}function A(_,x){let C;for(let N=0,z=u.length;N<z;N++){const U=u[N];if(U.cacheKey===x){C=U,++C.usedTimes;break}}return C===void 0&&(C=new dg(i,x,_,r),u.push(C)),C}function E(_){if(--_.usedTimes===0){const x=u.indexOf(_);u[x]=u[u.length-1],u.pop(),_.destroy()}}function w(_){l.remove(_)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:g,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:T}}function xg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function th(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function eh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,p,d,v,M,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:v,renderOrder:h.renderOrder,z:M,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=M,f.group=m),t++,f}function o(h,p,d,v,M,m){const f=a(h,p,d,v,M,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):e.push(f)}function l(h,p,d,v,M,m){const f=a(h,p,d,v,M,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,p){e.length>1&&e.sort(h||_g),n.length>1&&n.sort(p||th),s.length>1&&s.sort(p||th)}function u(){for(let h=t,p=i.length;h<p;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Mg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new eh,i.set(n,[a])):s>=r.length?(a=new eh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function yg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new wt};break;case"SpotLight":e={position:new F,direction:new F,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Sg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let bg=0;function wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Eg(i){const t=new yg,e=Sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new ve,a=new ve;function o(c){let u=0,h=0,p=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let d=0,v=0,M=0,m=0,f=0,y=0,b=0,g=0,A=0,E=0,w=0;c.sort(wg);for(let _=0,x=c.length;_<x;_++){const C=c[_],N=C.color,z=C.intensity,U=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=N.r*z,h+=N.g*z,p+=N.b*z;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],z);w++}else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,B=e.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=C.shadow.matrix,y++}n.directional[d]=k,d++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(N).multiplyScalar(z),k.distance=U,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[M]=k;const Y=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,Y.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[M]=Y.matrix,C.castShadow){const B=e.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.spotShadow[M]=B,n.spotShadowMap[M]=O,g++}M++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(N).multiplyScalar(z),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=k,m++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const Y=C.shadow,B=e.get(C);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,n.pointShadow[v]=B,n.pointShadowMap[v]=O,n.pointShadowMatrix[v]=C.shadow.matrix,b++}n.point[v]=k,v++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(z),k.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const T=n.hash;(T.directionalLength!==d||T.pointLength!==v||T.spotLength!==M||T.rectAreaLength!==m||T.hemiLength!==f||T.numDirectionalShadows!==y||T.numPointShadows!==b||T.numSpotShadows!==g||T.numSpotMaps!==A||T.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=M,n.rectArea.length=m,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=g+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,T.directionalLength=d,T.pointLength=v,T.spotLength=M,T.rectAreaLength=m,T.hemiLength=f,T.numDirectionalShadows=y,T.numPointShadows=b,T.numSpotShadows=g,T.numSpotMaps=A,T.numLightProbes=w,n.version=bg++)}function l(c,u){let h=0,p=0,d=0,v=0,M=0;const m=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const b=c[f];if(b.isDirectionalLight){const g=n.directional[h];g.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),h++}else if(b.isSpotLight){const g=n.spot[d];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const g=n.rectArea[v];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(b.width*.5,0,0),g.halfHeight.set(0,b.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const g=n.point[p];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(m),p++}else if(b.isHemisphereLight){const g=n.hemi[M];g.direction.setFromMatrixPosition(b.matrixWorld),g.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:n}}function nh(i){const t=new Eg(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Tg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new nh(i),t.set(s,[o])):r>=a.length?(o=new nh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ag extends us{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cg extends us{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pg=`uniform sampler2D shadow_pass;
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
}`;function Dg(i,t,e){let n=new Hl;const s=new Tt,r=new Tt,a=new Ae,o=new Ag({depthPacking:hf}),l=new Cg,c={},u=e.maxTextureSize,h={[Vi]:xn,[xn]:Vi,[Ze]:Ze},p=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Rg,fragmentShader:Pg}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const v=new Re;v.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Jt(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let f=this.type;this.render=function(E,w,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const _=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Je),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=f!==_i&&this.type===_i,U=f===_i&&this.type!==_i;for(let O=0,k=E.length;O<k;O++){const Y=E[O],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const K=B.getFrameExtents();if(s.multiply(K),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,B.mapSize.y=r.y)),B.map===null||z===!0||U===!0){const ct=this.type!==_i?{minFilter:ln,magFilter:ln}:{};B.map!==null&&B.map.dispose(),B.map=new _n(s.x,s.y,ct),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const at=B.getViewportCount();for(let ct=0;ct<at;ct++){const vt=B.getViewport(ct);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),N.viewport(a),B.updateMatrices(Y,ct),n=B.getFrustum(),g(w,T,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===_i&&y(B,T),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(_,x,C)};function y(E,w){const T=t.update(M);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new _n(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,T,p,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,T,d,M,null)}function b(E,w,T,_){let x=null;const C=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)x=C;else if(x=T.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=x.uuid,z=w.uuid;let U=c[N];U===void 0&&(U={},c[N]=U);let O=U[z];O===void 0&&(O=x.clone(),U[z]=O,w.addEventListener("dispose",A)),x=O}if(x.visible=w.visible,x.wireframe=w.wireframe,_===_i?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=i.properties.get(x);N.light=T}return x}function g(E,w,T,_,x){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===_i)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const z=t.update(E),U=E.material;if(Array.isArray(U)){const O=z.groups;for(let k=0,Y=O.length;k<Y;k++){const B=O[k],K=U[B.materialIndex];if(K&&K.visible){const at=b(E,K,_,x);E.onBeforeShadow(i,E,w,T,z,at,B),i.renderBufferDirect(T,null,z,at,E,B),E.onAfterShadow(i,E,w,T,z,at,B)}}}else if(U.visible){const O=b(E,U,_,x);E.onBeforeShadow(i,E,w,T,z,O,null),i.renderBufferDirect(T,null,z,O,E,null),E.onAfterShadow(i,E,w,T,z,O,null)}}const N=E.children;for(let z=0,U=N.length;z<U;z++)g(N[z],w,T,_,x)}function A(E){E.target.removeEventListener("dispose",A);for(const T in c){const _=c[T],x=E.target.uuid;x in _&&(_[x].dispose(),delete _[x])}}}const Lg={[Oo]:Bo,[ko]:Ho,[Vo]:Wo,[Gs]:Go,[Bo]:Oo,[Ho]:ko,[Wo]:Vo,[Go]:Gs};function Ug(i,t){function e(){let V=!1;const bt=new Ae;let it=null;const ut=new Ae(0,0,0,0);return{setMask:function(At){it!==At&&!V&&(i.colorMask(At,At,At,At),it=At)},setLocked:function(At){V=At},setClear:function(At,Ct,I,ot,Dt){Dt===!0&&(At*=ot,Ct*=ot,I*=ot),bt.set(At,Ct,I,ot),ut.equals(bt)===!1&&(i.clearColor(At,Ct,I,ot),ut.copy(bt))},reset:function(){V=!1,it=null,ut.set(-1,0,0,0)}}}function n(){let V=!1,bt=!1,it=null,ut=null,At=null;return{setReversed:function(Ct){if(bt!==Ct){const I=t.get("EXT_clip_control");bt?I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT):I.clipControlEXT(I.LOWER_LEFT_EXT,I.NEGATIVE_ONE_TO_ONE_EXT);const ot=At;At=null,this.setClear(ot)}bt=Ct},getReversed:function(){return bt},setTest:function(Ct){Ct?dt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(Ct){it!==Ct&&!V&&(i.depthMask(Ct),it=Ct)},setFunc:function(Ct){if(bt&&(Ct=Lg[Ct]),ut!==Ct){switch(Ct){case Oo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Go:i.depthFunc(i.GEQUAL);break;case Ho:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=Ct}},setLocked:function(Ct){V=Ct},setClear:function(Ct){At!==Ct&&(bt&&(Ct=1-Ct),i.clearDepth(Ct),At=Ct)},reset:function(){V=!1,it=null,ut=null,At=null,bt=!1}}}function s(){let V=!1,bt=null,it=null,ut=null,At=null,Ct=null,I=null,ot=null,Dt=null;return{setTest:function(Bt){V||(Bt?dt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(Bt){bt!==Bt&&!V&&(i.stencilMask(Bt),bt=Bt)},setFunc:function(Bt,ue,ee){(it!==Bt||ut!==ue||At!==ee)&&(i.stencilFunc(Bt,ue,ee),it=Bt,ut=ue,At=ee)},setOp:function(Bt,ue,ee){(Ct!==Bt||I!==ue||ot!==ee)&&(i.stencilOp(Bt,ue,ee),Ct=Bt,I=ue,ot=ee)},setLocked:function(Bt){V=Bt},setClear:function(Bt){Dt!==Bt&&(i.clearStencil(Bt),Dt=Bt)},reset:function(){V=!1,bt=null,it=null,ut=null,At=null,Ct=null,I=null,ot=null,Dt=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,d=[],v=null,M=!1,m=null,f=null,y=null,b=null,g=null,A=null,E=null,w=new wt(0,0,0),T=0,_=!1,x=null,C=null,N=null,z=null,U=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Y=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=Y>=2);let K=null,at={};const ct=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Xt=new Ae().fromArray(ct),et=new Ae().fromArray(vt);function ht(V,bt,it,ut){const At=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(V,Ct),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let I=0;I<it;I++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(bt+I,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return Ct}const xt={};xt[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(i.DEPTH_TEST),a.setFunc(Gs),te(!1),$t(ac),dt(i.CULL_FACE),W(Je);function dt(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function Lt(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function Ft(V,bt){return h[V]!==bt?(i.bindFramebuffer(V,bt),h[V]=bt,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=bt),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Wt(V,bt){let it=d,ut=!1;if(V){it=p.get(bt),it===void 0&&(it=[],p.set(bt,it));const At=V.textures;if(it.length!==At.length||it[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,I=At.length;Ct<I;Ct++)it[Ct]=i.COLOR_ATTACHMENT0+Ct;it.length=At.length,ut=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,ut=!0);ut&&i.drawBuffers(it)}function ce(V){return v!==V?(i.useProgram(V),v=V,!0):!1}const Qt={[qn]:i.FUNC_ADD,[Wu]:i.FUNC_SUBTRACT,[Xu]:i.FUNC_REVERSE_SUBTRACT};Qt[qu]=i.MIN,Qt[Yu]=i.MAX;const pe={[ur]:i.ZERO,[ju]:i.ONE,[$u]:i.SRC_COLOR,[Io]:i.SRC_ALPHA,[Qu]:i.SRC_ALPHA_SATURATE,[zo]:i.DST_COLOR,[Fo]:i.DST_ALPHA,[Zu]:i.ONE_MINUS_SRC_COLOR,[No]:i.ONE_MINUS_SRC_ALPHA,[Ju]:i.ONE_MINUS_DST_COLOR,[Ku]:i.ONE_MINUS_DST_ALPHA,[tf]:i.CONSTANT_COLOR,[ef]:i.ONE_MINUS_CONSTANT_COLOR,[nf]:i.CONSTANT_ALPHA,[sf]:i.ONE_MINUS_CONSTANT_ALPHA};function W(V,bt,it,ut,At,Ct,I,ot,Dt,Bt){if(V===Je){M===!0&&(Lt(i.BLEND),M=!1);return}if(M===!1&&(dt(i.BLEND),M=!0),V!==Ih){if(V!==m||Bt!==_){if((f!==qn||g!==qn)&&(i.blendEquation(i.FUNC_ADD),f=qn,g=qn),Bt)switch(V){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFunc(i.ONE,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}y=null,b=null,A=null,E=null,w.set(0,0,0),T=0,m=V,_=Bt}return}At=At||bt,Ct=Ct||it,I=I||ut,(bt!==f||At!==g)&&(i.blendEquationSeparate(Qt[bt],Qt[At]),f=bt,g=At),(it!==y||ut!==b||Ct!==A||I!==E)&&(i.blendFuncSeparate(pe[it],pe[ut],pe[Ct],pe[I]),y=it,b=ut,A=Ct,E=I),(ot.equals(w)===!1||Dt!==T)&&(i.blendColor(ot.r,ot.g,ot.b,Dt),w.copy(ot),T=Dt),m=V,_=!1}function Ee(V,bt){V.side===Ze?Lt(i.CULL_FACE):dt(i.CULL_FACE);let it=V.side===xn;bt&&(it=!it),te(it),V.blending===Oi&&V.transparent===!1?W(Je):W(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const ut=V.stencilWrite;o.setTest(ut),ut&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),he(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(V){x!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),x=V)}function $t(V){V!==Gu?(dt(i.CULL_FACE),V!==C&&(V===ac?i.cullFace(i.BACK):V===Hu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),C=V}function Ot(V){V!==N&&(k&&i.lineWidth(V),N=V)}function he(V,bt,it){V?(dt(i.POLYGON_OFFSET_FILL),(z!==bt||U!==it)&&(i.polygonOffset(bt,it),z=bt,U=it)):Lt(i.POLYGON_OFFSET_FILL)}function j(V){V?dt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function R(V){V===void 0&&(V=i.TEXTURE0+O-1),K!==V&&(i.activeTexture(V),K=V)}function S(V,bt,it){it===void 0&&(K===null?it=i.TEXTURE0+O-1:it=K);let ut=at[it];ut===void 0&&(ut={type:void 0,texture:void 0},at[it]=ut),(ut.type!==V||ut.texture!==bt)&&(K!==it&&(i.activeTexture(it),K=it),i.bindTexture(V,bt||xt[V]),ut.type=V,ut.texture=bt)}function G(){const V=at[K];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Zt(V){Xt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Xt.copy(V))}function Nt(V){et.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),et.copy(V))}function ne(V,bt){let it=c.get(bt);it===void 0&&(it=new WeakMap,c.set(bt,it));let ut=it.get(V);ut===void 0&&(ut=i.getUniformBlockIndex(bt,V.name),it.set(V,ut))}function Yt(V,bt){const ut=c.get(bt).get(V);l.get(bt)!==ut&&(i.uniformBlockBinding(bt,ut,V.__bindingPointIndex),l.set(bt,ut))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,at={},h={},p=new WeakMap,d=[],v=null,M=!1,m=null,f=null,y=null,b=null,g=null,A=null,E=null,w=new wt(0,0,0),T=0,_=!1,x=null,C=null,N=null,z=null,U=null,Xt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:Lt,bindFramebuffer:Ft,drawBuffers:Wt,useProgram:ce,setBlending:W,setMaterial:Ee,setFlipSided:te,setCullFace:$t,setLineWidth:Ot,setPolygonOffset:he,setScissorTest:j,activeTexture:R,bindTexture:S,unbindTexture:G,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:Ut,texImage3D:qt,updateUBOMapping:ne,uniformBlockBinding:Yt,texStorage2D:Kt,texStorage3D:gt,texSubImage2D:Q,texSubImage3D:Et,compressedTexSubImage2D:pt,compressedTexSubImage3D:Mt,scissor:Zt,viewport:Nt,reset:oe}}function ih(i,t,e,n){const s=Ig(n);switch(e){case Wh:return i*t;case qh:return i*t;case Yh:return i*t*2;case Ua:return i*t/s.components*s.byteLength;case Fl:return i*t/s.components*s.byteLength;case jh:return i*t*2/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case Xh:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case Ol:return i*t*4/s.components*s.byteLength;case va:case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _a:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:case Ko:return Math.max(i,16)*Math.max(t,8)/4;case jo:case Zo:return Math.max(i,8)*Math.max(t,8)/2;case Jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ya:case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $h:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ig(i){switch(i){case ai:case Vh:return{byteLength:1,components:1};case Sr:case Gh:case Fn:return{byteLength:2,components:1};case Il:case Nl:return{byteLength:2,components:4};case as:case Ul:case $n:return{byteLength:4,components:1};case Hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ng(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,u=new WeakMap;let h;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return d?new OffscreenCanvas(R,S):Ca("canvas")}function M(R,S,G){let $=1;const J=j(R);if((J.width>G||J.height>G)&&($=G/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor($*J.width),Et=Math.floor($*J.height);h===void 0&&(h=v(Q,Et));const pt=S?v(Q,Et):h;return pt.width=Q,pt.height=Et,pt.getContext("2d").drawImage(R,0,0,Q,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Q+"x"+Et+")."),pt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,S,G,$,J=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=S;if(S===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),S===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),S===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),S===i.RGBA){const Et=J?Ia:ge.getTransfer($);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=Et===ye?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function g(R,S){let G;return R?S===null||S===as||S===os?G=i.DEPTH24_STENCIL8:S===$n?G=i.DEPTH32F_STENCIL8:S===Sr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===as||S===os?G=i.DEPTH_COMPONENT24:S===$n?G=i.DEPTH_COMPONENT32F:S===Sr&&(G=i.DEPTH_COMPONENT16),G}function A(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==si?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){const S=R.target;S.removeEventListener("dispose",E),T(S),S.isVideoTexture&&u.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),x(S)}function T(R){const S=n.get(R);if(S.__webglInit===void 0)return;const G=R.source,$=p.get(G);if($){const J=$[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&_(R),Object.keys($).length===0&&p.delete(G)}n.remove(R)}function _(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const G=R.source,$=p.get(G);delete $[S.__cacheKey],a.memory.textures--}function x(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let J=0;J<S.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[$][J]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=R.textures;for(let $=0,J=G.length;$<J;$++){const Q=n.get(G[$]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(G[$])}n.remove(R)}let C=0;function N(){C=0}function z(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function U(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function O(R,S){const G=n.get(R);if(R.isVideoTexture&&Ot(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(G,R,S);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function k(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){et(G,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function Y(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){et(G,R,S);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function B(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){ht(G,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const K={[Ti]:i.REPEAT,[ts]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},at={[ln]:i.NEAREST,[lf]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[si]:i.LINEAR,[Xa]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},ct={[ff]:i.NEVER,[xf]:i.ALWAYS,[df]:i.LESS,[Zh]:i.LEQUAL,[pf]:i.EQUAL,[vf]:i.GEQUAL,[mf]:i.GREATER,[gf]:i.NOTEQUAL};function vt(R,S){if(S.type===$n&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===si||S.magFilter===Xa||S.magFilter===Ir||S.magFilter===es||S.minFilter===si||S.minFilter===Xa||S.minFilter===Ir||S.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,K[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,K[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,K[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,at[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,at[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ln||S.minFilter!==Ir&&S.minFilter!==es||S.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Xt(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));const $=S.source;let J=p.get($);J===void 0&&(J={},p.set($,J));const Q=U(S);if(Q!==R.__cacheKey){J[Q]===void 0&&(J[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[Q].usedTimes++;const Et=J[R.__cacheKey];Et!==void 0&&(J[R.__cacheKey].usedTimes--,Et.usedTimes===0&&_(S)),R.__cacheKey=Q,R.__webglTexture=J[Q].texture}return G}function et(R,S,G){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const J=Xt(R,S),Q=S.source;e.bindTexture($,R.__webglTexture,i.TEXTURE0+G);const Et=n.get(Q);if(Q.version!==Et.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const pt=ge.getPrimaries(ge.workingColorSpace),Mt=S.colorSpace===Ii?null:ge.getPrimaries(S.colorSpace),Kt=S.colorSpace===Ii||pt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let gt=M(S.image,!1,s.maxTextureSize);gt=he(S,gt);const Ut=r.convert(S.format,S.colorSpace),qt=r.convert(S.type);let Zt=b(S.internalFormat,Ut,qt,S.colorSpace,S.isVideoTexture);vt($,S);let Nt;const ne=S.mipmaps,Yt=S.isVideoTexture!==!0,oe=Et.__version===void 0||J===!0,V=Q.dataReady,bt=A(S,gt);if(S.isDepthTexture)Zt=g(S.format===ls,S.type),oe&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Zt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Zt,gt.width,gt.height,0,Ut,qt,null));else if(S.isDataTexture)if(ne.length>0){Yt&&oe&&e.texStorage2D(i.TEXTURE_2D,bt,Zt,ne[0].width,ne[0].height);for(let it=0,ut=ne.length;it<ut;it++)Nt=ne[it],Yt?V&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Nt.width,Nt.height,Ut,qt,Nt.data):e.texImage2D(i.TEXTURE_2D,it,Zt,Nt.width,Nt.height,0,Ut,qt,Nt.data);S.generateMipmaps=!1}else Yt?(oe&&e.texStorage2D(i.TEXTURE_2D,bt,Zt,gt.width,gt.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,Ut,qt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Zt,gt.width,gt.height,0,Ut,qt,gt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Yt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Zt,ne[0].width,ne[0].height,gt.depth);for(let it=0,ut=ne.length;it<ut;it++)if(Nt=ne[it],S.format!==In)if(Ut!==null)if(Yt){if(V)if(S.layerUpdates.size>0){const At=ih(Nt.width,Nt.height,S.format,S.type);for(const Ct of S.layerUpdates){const I=Nt.data.subarray(Ct*At/Nt.data.BYTES_PER_ELEMENT,(Ct+1)*At/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,Ct,Nt.width,Nt.height,1,Ut,I)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Nt.width,Nt.height,gt.depth,Ut,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Zt,Nt.width,Nt.height,gt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,Nt.width,Nt.height,gt.depth,Ut,qt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Zt,Nt.width,Nt.height,gt.depth,0,Ut,qt,Nt.data)}else{Yt&&oe&&e.texStorage2D(i.TEXTURE_2D,bt,Zt,ne[0].width,ne[0].height);for(let it=0,ut=ne.length;it<ut;it++)Nt=ne[it],S.format!==In?Ut!==null?Yt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,Nt.width,Nt.height,Ut,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Zt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?V&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Nt.width,Nt.height,Ut,qt,Nt.data):e.texImage2D(i.TEXTURE_2D,it,Zt,Nt.width,Nt.height,0,Ut,qt,Nt.data)}else if(S.isDataArrayTexture)if(Yt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Zt,gt.width,gt.height,gt.depth),V)if(S.layerUpdates.size>0){const it=ih(gt.width,gt.height,S.format,S.type);for(const ut of S.layerUpdates){const At=gt.data.subarray(ut*it/gt.data.BYTES_PER_ELEMENT,(ut+1)*it/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,gt.width,gt.height,1,Ut,qt,At)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Ut,qt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,gt.width,gt.height,gt.depth,0,Ut,qt,gt.data);else if(S.isData3DTexture)Yt?(oe&&e.texStorage3D(i.TEXTURE_3D,bt,Zt,gt.width,gt.height,gt.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Ut,qt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,gt.width,gt.height,gt.depth,0,Ut,qt,gt.data);else if(S.isFramebufferTexture){if(oe)if(Yt)e.texStorage2D(i.TEXTURE_2D,bt,Zt,gt.width,gt.height);else{let it=gt.width,ut=gt.height;for(let At=0;At<bt;At++)e.texImage2D(i.TEXTURE_2D,At,Zt,it,ut,0,Ut,qt,null),it>>=1,ut>>=1}}else if(ne.length>0){if(Yt&&oe){const it=j(ne[0]);e.texStorage2D(i.TEXTURE_2D,bt,Zt,it.width,it.height)}for(let it=0,ut=ne.length;it<ut;it++)Nt=ne[it],Yt?V&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,Ut,qt,Nt):e.texImage2D(i.TEXTURE_2D,it,Zt,Ut,qt,Nt);S.generateMipmaps=!1}else if(Yt){if(oe){const it=j(gt);e.texStorage2D(i.TEXTURE_2D,bt,Zt,it.width,it.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,qt,gt)}else e.texImage2D(i.TEXTURE_2D,0,Zt,Ut,qt,gt);m(S)&&f($),Et.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ht(R,S,G){if(S.image.length!==6)return;const $=Xt(R,S),J=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const Q=n.get(J);if(J.version!==Q.__version||$===!0){e.activeTexture(i.TEXTURE0+G);const Et=ge.getPrimaries(ge.workingColorSpace),pt=S.colorSpace===Ii?null:ge.getPrimaries(S.colorSpace),Mt=S.colorSpace===Ii||Et===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Kt=S.isCompressedTexture||S.image[0].isCompressedTexture,gt=S.image[0]&&S.image[0].isDataTexture,Ut=[];for(let ut=0;ut<6;ut++)!Kt&&!gt?Ut[ut]=M(S.image[ut],!0,s.maxCubemapSize):Ut[ut]=gt?S.image[ut].image:S.image[ut],Ut[ut]=he(S,Ut[ut]);const qt=Ut[0],Zt=r.convert(S.format,S.colorSpace),Nt=r.convert(S.type),ne=b(S.internalFormat,Zt,Nt,S.colorSpace),Yt=S.isVideoTexture!==!0,oe=Q.__version===void 0||$===!0,V=J.dataReady;let bt=A(S,qt);vt(i.TEXTURE_CUBE_MAP,S);let it;if(Kt){Yt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,ne,qt.width,qt.height);for(let ut=0;ut<6;ut++){it=Ut[ut].mipmaps;for(let At=0;At<it.length;At++){const Ct=it[At];S.format!==In?Zt!==null?Yt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At,0,0,Ct.width,Ct.height,Zt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At,ne,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At,0,0,Ct.width,Ct.height,Zt,Nt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At,ne,Ct.width,Ct.height,0,Zt,Nt,Ct.data)}}}else{if(it=S.mipmaps,Yt&&oe){it.length>0&&bt++;const ut=j(Ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,ne,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(gt){Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ut[ut].width,Ut[ut].height,Zt,Nt,Ut[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ne,Ut[ut].width,Ut[ut].height,0,Zt,Nt,Ut[ut].data);for(let At=0;At<it.length;At++){const I=it[At].image[ut].image;Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At+1,0,0,I.width,I.height,Zt,Nt,I.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At+1,ne,I.width,I.height,0,Zt,Nt,I.data)}}else{Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Zt,Nt,Ut[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ne,Zt,Nt,Ut[ut]);for(let At=0;At<it.length;At++){const Ct=it[At];Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At+1,0,0,Zt,Nt,Ct.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,At+1,ne,Zt,Nt,Ct.image[ut])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),Q.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function xt(R,S,G,$,J,Q){const Et=r.convert(G.format,G.colorSpace),pt=r.convert(G.type),Mt=b(G.internalFormat,Et,pt,G.colorSpace),Kt=n.get(S),gt=n.get(G);if(gt.__renderTarget=S,!Kt.__hasExternalTextures){const Ut=Math.max(1,S.width>>Q),qt=Math.max(1,S.height>>Q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Q,Mt,Ut,qt,S.depth,0,Et,pt,null):e.texImage2D(J,Q,Mt,Ut,qt,0,Et,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),$t(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,gt.__webglTexture,0,te(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,gt.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(R,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const $=S.depthTexture,J=$&&$.isDepthTexture?$.type:null,Q=g(S.stencilBuffer,J),Et=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=te(S);$t(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,Q,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,Q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Q,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,R)}else{const $=S.textures;for(let J=0;J<$.length;J++){const Q=$[J],Et=r.convert(Q.format,Q.colorSpace),pt=r.convert(Q.type),Mt=b(Q.internalFormat,Et,pt,Q.colorSpace),Kt=te(S);G&&$t(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Mt,S.width,S.height):$t(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,Mt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const J=$.__webglTexture,Q=te(S);if(S.depthTexture.format===Fs)$t(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(S.depthTexture.format===ls)$t(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ft(R){const S=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=$}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Lt(S.__webglFramebuffer,R)}else if(G){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),dt(S.__webglDepthbuffer[$],R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),dt(S.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(R,S,G){const $=n.get(R);S!==void 0&&xt($.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ft(R)}function ce(R){const S=R.texture,G=n.get(R),$=n.get(S);R.addEventListener("dispose",w);const J=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Et=J.length>1;if(Et||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,a.memory.textures++),Q){G.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[pt]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)G.__webglFramebuffer[pt][Mt]=i.createFramebuffer()}else G.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let pt=0;pt<S.mipmaps.length;pt++)G.__webglFramebuffer[pt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Et)for(let pt=0,Mt=J.length;pt<Mt;pt++){const Kt=n.get(J[pt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&$t(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pt=0;pt<J.length;pt++){const Mt=J[pt];G.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[pt]);const Kt=r.convert(Mt.format,Mt.colorSpace),gt=r.convert(Mt.type),Ut=b(Mt.internalFormat,Kt,gt,Mt.colorSpace,R.isXRRenderTarget===!0),qt=te(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Ut,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,G.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),vt(i.TEXTURE_CUBE_MAP,S);for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)xt(G.__webglFramebuffer[pt][Mt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt);else xt(G.__webglFramebuffer[pt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let pt=0,Mt=J.length;pt<Mt;pt++){const Kt=J[pt],gt=n.get(Kt);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),vt(i.TEXTURE_2D,Kt),xt(G.__webglFramebuffer,R,Kt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(Kt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,$.__webglTexture),vt(pt,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)xt(G.__webglFramebuffer[Mt],R,S,i.COLOR_ATTACHMENT0,pt,Mt);else xt(G.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,pt,0);m(S)&&f(pt),e.unbindTexture()}R.depthBuffer&&Ft(R)}function Qt(R){const S=R.textures;for(let G=0,$=S.length;G<$;G++){const J=S[G];if(m(J)){const Q=y(R),Et=n.get(J).__webglTexture;e.bindTexture(Q,Et),f(Q),e.unbindTexture()}}}const pe=[],W=[];function Ee(R){if(R.samples>0){if($t(R)===!1){const S=R.textures,G=R.width,$=R.height;let J=i.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(R),pt=S.length>1;if(pt)for(let Mt=0;Mt<S.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Mt=0;Mt<S.length;Mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Mt]);const Kt=n.get(S[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,G,$,0,0,G,$,J,i.NEAREST),l===!0&&(pe.length=0,W.length=0,pe.push(i.COLOR_ATTACHMENT0+Mt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(pe.push(Q),W.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Mt=0;Mt<S.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Mt]);const Kt=n.get(S[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function te(R){return Math.min(s.maxSamples,R.samples)}function $t(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ot(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function he(R,S){const G=R.colorSpace,$=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==js&&G!==Ii&&(ge.getTransfer(G)===ye?($!==In||J!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function j(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=Wt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=$t}function Fg(i,t){function e(n,s=Ii){let r;const a=ge.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vh)return i.BYTE;if(n===Gh)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===Ul)return i.INT;if(n===as)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===Wh)return i.ALPHA;if(n===Xh)return i.RGB;if(n===In)return i.RGBA;if(n===qh)return i.LUMINANCE;if(n===Yh)return i.LUMINANCE_ALPHA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===Ua)return i.RED;if(n===Fl)return i.RED_INTEGER;if(n===jh)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===Ol)return i.RGBA_INTEGER;if(n===va||n===xa||n===_a||n===Ma)if(a===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jo||n===$o||n===Zo||n===Ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jo||n===Qo||n===tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jo||n===Qo)return a===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===fl||n===dl||n===pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===ml||n===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ya)return a===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$h||n===vl||n===xl||n===_l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class zg extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Me extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Og={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,v=.005;c.inputState.pinching&&p>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kg=`
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

}`;class Vg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new cn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ne({vertexShader:Bg,fragmentShader:kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gg extends $s{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,p=null,d=null,v=null;const M=new Vg,m=e.getContextAttributes();let f=null,y=null;const b=[],g=[],A=new Tt;let E=null;const w=new Tn;w.viewport=new Ae;const T=new Tn;T.viewport=new Ae;const _=[w,T],x=new zg;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ht=b[et];return ht===void 0&&(ht=new _o,b[et]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(et){let ht=b[et];return ht===void 0&&(ht=new _o,b[et]=ht),ht.getGripSpace()},this.getHand=function(et){let ht=b[et];return ht===void 0&&(ht=new _o,b[et]=ht),ht.getHandSpace()};function z(et){const ht=g.indexOf(et.inputSource);if(ht===-1)return;const xt=b[ht];xt!==void 0&&(xt.update(et.inputSource,et.frame,c||a),xt.dispatchEvent({type:et.type,data:et.inputSource}))}function U(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",O);for(let et=0;et<b.length;et++){const ht=g[et];ht!==null&&(g[et]=null,b[et].disconnect(ht))}C=null,N=null,M.reset(),t.setRenderTarget(f),d=null,p=null,h=null,s=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",U),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new _n(d.framebufferWidth,d.framebufferHeight,{format:In,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ht=null,xt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?ls:Fs,xt=m.stencil?os:as);const Lt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};h=new XRWebGLBinding(s,e),p=h.createProjectionLayer(Lt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new _n(p.textureWidth,p.textureHeight,{format:In,type:ai,depthTexture:new ql(p.textureWidth,p.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function O(et){for(let ht=0;ht<et.removed.length;ht++){const xt=et.removed[ht],dt=g.indexOf(xt);dt>=0&&(g[dt]=null,b[dt].disconnect(xt))}for(let ht=0;ht<et.added.length;ht++){const xt=et.added[ht];let dt=g.indexOf(xt);if(dt===-1){for(let Ft=0;Ft<b.length;Ft++)if(Ft>=g.length){g.push(xt),dt=Ft;break}else if(g[Ft]===null){g[Ft]=xt,dt=Ft;break}if(dt===-1)break}const Lt=b[dt];Lt&&Lt.connect(xt)}}const k=new F,Y=new F;function B(et,ht,xt){k.setFromMatrixPosition(ht.matrixWorld),Y.setFromMatrixPosition(xt.matrixWorld);const dt=k.distanceTo(Y),Lt=ht.projectionMatrix.elements,Ft=xt.projectionMatrix.elements,Wt=Lt[14]/(Lt[10]-1),ce=Lt[14]/(Lt[10]+1),Qt=(Lt[9]+1)/Lt[5],pe=(Lt[9]-1)/Lt[5],W=(Lt[8]-1)/Lt[0],Ee=(Ft[8]+1)/Ft[0],te=Wt*W,$t=Wt*Ee,Ot=dt/(-W+Ee),he=Ot*-W;if(ht.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(he),et.translateZ(Ot),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Lt[10]===-1)et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const j=Wt+Ot,R=ce+Ot,S=te-he,G=$t+(dt-he),$=Qt*ce/R*j,J=pe*ce/R*j;et.projectionMatrix.makePerspective(S,G,$,J,j,R),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function K(et,ht){ht===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ht.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ht=et.near,xt=et.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),x.near=T.near=w.near=ht,x.far=T.far=w.far=xt,(C!==x.near||N!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,N=x.far),w.layers.mask=et.layers.mask|2,T.layers.mask=et.layers.mask|4,x.layers.mask=w.layers.mask|T.layers.mask;const dt=et.parent,Lt=x.cameras;K(x,dt);for(let Ft=0;Ft<Lt.length;Ft++)K(Lt[Ft],dt);Lt.length===2?B(x,w,T):x.projectionMatrix.copy(w.projectionMatrix),at(et,x,dt)};function at(et,ht,xt){xt===null?et.matrix.copy(ht.matrixWorld):(et.matrix.copy(xt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ht.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ht.projectionMatrix),et.projectionMatrixInverse.copy(ht.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=br*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(et){l=et,p!==null&&(p.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let ct=null;function vt(et,ht){if(u=ht.getViewerPose(c||a),v=ht,u!==null){const xt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let dt=!1;xt.length!==x.cameras.length&&(x.cameras.length=0,dt=!0);for(let Ft=0;Ft<xt.length;Ft++){const Wt=xt[Ft];let ce=null;if(d!==null)ce=d.getViewport(Wt);else{const pe=h.getViewSubImage(p,Wt);ce=pe.viewport,Ft===0&&(t.setRenderTargetTextures(y,pe.colorTexture,p.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(y))}let Qt=_[Ft];Qt===void 0&&(Qt=new Tn,Qt.layers.enable(Ft),Qt.viewport=new Ae,_[Ft]=Qt),Qt.matrix.fromArray(Wt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Wt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ce.x,ce.y,ce.width,ce.height),Ft===0&&(x.matrix.copy(Qt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),dt===!0&&x.cameras.push(Qt)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ft=h.getDepthInformation(xt[0]);Ft&&Ft.isValid&&Ft.texture&&M.init(t,Ft,s.renderState)}}for(let xt=0;xt<b.length;xt++){const dt=g[xt],Lt=b[xt];dt!==null&&Lt!==void 0&&Lt.update(dt,ht,c||a)}ct&&ct(et,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),v=null}const Xt=new au;Xt.setAnimationLoop(vt),this.setAnimationLoop=function(et){ct=et},this.dispose=function(){}}}const ji=new oi,Hg=new ve;function Wg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,iu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,b,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,g)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===xn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===xn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),b=y.envMap,g=y.envMapRotation;b&&(m.envMap.value=b,ji.copy(g),ji.x*=-1,ji.y*=-1,ji.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(ji)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const g=b.program;n.uniformBlockBinding(y,g)}function c(y,b){let g=s[y.id];g===void 0&&(v(y),g=u(y),s[y.id]=g,y.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(y,A);const E=t.render.frame;r[y.id]!==E&&(p(y),r[y.id]=E)}function u(y){const b=h();y.__bindingPointIndex=b;const g=i.createBuffer(),A=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,g),g}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const b=s[y.id],g=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,w=g.length;E<w;E++){const T=Array.isArray(g[E])?g[E]:[g[E]];for(let _=0,x=T.length;_<x;_++){const C=T[_];if(d(C,E,_,A)===!0){const N=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let U=0;for(let O=0;O<z.length;O++){const k=z[O],Y=M(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+U,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,b,g,A){const E=y.value,w=b+"_"+g;if(A[w]===void 0)return typeof E=="number"||typeof E=="boolean"?A[w]=E:A[w]=E.clone(),!0;{const T=A[w];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return A[w]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function v(y){const b=y.uniforms;let g=0;const A=16;for(let w=0,T=b.length;w<T;w++){const _=Array.isArray(b[w])?b[w]:[b[w]];for(let x=0,C=_.length;x<C;x++){const N=_[x],z=Array.isArray(N.value)?N.value:[N.value];for(let U=0,O=z.length;U<O;U++){const k=z[U],Y=M(k),B=g%A,K=B%Y.boundary,at=B+K;g+=K,at!==0&&A-at<Y.storage&&(g+=A-at),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=g,g+=Y.storage}}}const E=g%A;return E>0&&(g+=A-E),y.__size=g,y.__cache={},this}function M(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const g=a.indexOf(b.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class qg{constructor(t={}){const{canvas:e=Nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const v=new Uint32Array(4),M=new Int32Array(4);let m=null,f=null;const y=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=Bi,this.toneMappingExposure=1;const g=this;let A=!1,E=0,w=0,T=null,_=-1,x=null;const C=new Ae,N=new Ae;let z=null;const U=new wt(0);let O=0,k=e.width,Y=e.height,B=1,K=null,at=null;const ct=new Ae(0,0,k,Y),vt=new Ae(0,0,k,Y);let Xt=!1;const et=new Hl;let ht=!1,xt=!1;const dt=new ve,Lt=new ve,Ft=new F,Wt=new Ae,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function pe(){return T===null?B:1}let W=n;function Ee(P,X){return e.getContext(P,X)}try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pl}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),W===null){const X="webgl2";if(W=Ee(X,P),W===null)throw Ee(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let te,$t,Ot,he,j,R,S,G,$,J,Q,Et,pt,Mt,Kt,gt,Ut,qt,Zt,Nt,ne,Yt,oe,V;function bt(){te=new Km(W),te.init(),Yt=new Fg(W,te),$t=new Xm(W,te,t,Yt),Ot=new Ug(W,te),$t.reverseDepthBuffer&&p&&Ot.buffers.depth.setReversed(!0),he=new t0(W),j=new xg,R=new Ng(W,te,Ot,j,$t,Yt,he),S=new Ym(g),G=new Zm(g),$=new od(W),oe=new Hm(W,$),J=new Jm(W,$,he,oe),Q=new n0(W,J,$,he),Zt=new e0(W,$t,R),gt=new qm(j),Et=new vg(g,S,G,te,$t,oe,gt),pt=new Wg(g,j),Mt=new Mg,Kt=new Tg(te),qt=new Gm(g,S,G,Ot,Q,d,l),Ut=new Dg(g,Q,$t),V=new Xg(W,he,$t,Ot),Nt=new Wm(W,te,he),ne=new Qm(W,te,he),he.programs=Et.programs,g.capabilities=$t,g.extensions=te,g.properties=j,g.renderLists=Mt,g.shadowMap=Ut,g.state=Ot,g.info=he}bt();const it=new Gg(g,W);this.xr=it,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const P=te.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=te.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(k,Y,!1))},this.getSize=function(P){return P.set(k,Y)},this.setSize=function(P,X,tt=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,Y=X,e.width=Math.floor(P*B),e.height=Math.floor(X*B),tt===!0&&(e.style.width=P+"px",e.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(k*B,Y*B).floor()},this.setDrawingBufferSize=function(P,X,tt){k=P,Y=X,B=tt,e.width=Math.floor(P*tt),e.height=Math.floor(X*tt),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(ct)},this.setViewport=function(P,X,tt,nt){P.isVector4?ct.set(P.x,P.y,P.z,P.w):ct.set(P,X,tt,nt),Ot.viewport(C.copy(ct).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(vt)},this.setScissor=function(P,X,tt,nt){P.isVector4?vt.set(P.x,P.y,P.z,P.w):vt.set(P,X,tt,nt),Ot.scissor(N.copy(vt).multiplyScalar(B).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(P){Ot.setScissorTest(Xt=P)},this.setOpaqueSort=function(P){K=P},this.setTransparentSort=function(P){at=P},this.getClearColor=function(P){return P.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(P=!0,X=!0,tt=!0){let nt=0;if(P){let q=!1;if(T!==null){const St=T.texture.format;q=St===Ol||St===zl||St===Fl}if(q){const St=T.texture.type,It=St===ai||St===as||St===Sr||St===os||St===Il||St===Nl,Gt=qt.getClearColor(),L=qt.getClearAlpha(),D=Gt.r,H=Gt.g,Z=Gt.b;It?(v[0]=D,v[1]=H,v[2]=Z,v[3]=L,W.clearBufferuiv(W.COLOR,0,v)):(M[0]=D,M[1]=H,M[2]=Z,M[3]=L,W.clearBufferiv(W.COLOR,0,M))}else nt|=W.COLOR_BUFFER_BIT}X&&(nt|=W.DEPTH_BUFFER_BIT),tt&&(nt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),Mt.dispose(),Kt.dispose(),j.dispose(),S.dispose(),G.dispose(),Q.dispose(),oe.dispose(),V.dispose(),Et.dispose(),it.dispose(),it.removeEventListener("sessionstart",De),it.removeEventListener("sessionend",Ue),Be.stop()};function ut(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=he.autoReset,X=Ut.enabled,tt=Ut.autoUpdate,nt=Ut.needsUpdate,q=Ut.type;bt(),he.autoReset=P,Ut.enabled=X,Ut.autoUpdate=tt,Ut.needsUpdate=nt,Ut.type=q}function Ct(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function I(P){const X=P.target;X.removeEventListener("dispose",I),ot(X)}function ot(P){Dt(P),j.remove(P)}function Dt(P){const X=j.get(P).programs;X!==void 0&&(X.forEach(function(tt){Et.releaseProgram(tt)}),P.isShaderMaterial&&Et.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,tt,nt,q,St){X===null&&(X=ce);const It=q.isMesh&&q.matrixWorld.determinant()<0,Gt=fi(P,X,tt,nt,q);Ot.setMaterial(nt,It);let L=tt.index,D=1;if(nt.wireframe===!0){if(L=J.getWireframeAttribute(tt),L===void 0)return;D=2}const H=tt.drawRange,Z=tt.attributes.position;let lt=H.start*D,mt=(H.start+H.count)*D;St!==null&&(lt=Math.max(lt,St.start*D),mt=Math.min(mt,(St.start+St.count)*D)),L!==null?(lt=Math.max(lt,0),mt=Math.min(mt,L.count)):Z!=null&&(lt=Math.max(lt,0),mt=Math.min(mt,Z.count));const _t=mt-lt;if(_t<0||_t===1/0)return;oe.setup(q,nt,Gt,tt,L);let ft,Rt=Nt;if(L!==null&&(ft=$.get(L),Rt=ne,Rt.setIndex(ft)),q.isMesh)nt.wireframe===!0?(Ot.setLineWidth(nt.wireframeLinewidth*pe()),Rt.setMode(W.LINES)):Rt.setMode(W.TRIANGLES);else if(q.isLine){let yt=nt.linewidth;yt===void 0&&(yt=1),Ot.setLineWidth(yt*pe()),q.isLineSegments?Rt.setMode(W.LINES):q.isLineLoop?Rt.setMode(W.LINE_LOOP):Rt.setMode(W.LINE_STRIP)}else q.isPoints?Rt.setMode(W.POINTS):q.isSprite&&Rt.setMode(W.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Rt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Rt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const yt=q._multiDrawStarts,me=q._multiDrawCounts,jt=q._multiDrawCount,xe=L?$.get(L).bytesPerElement:1,Qn=j.get(nt).currentProgram.getUniforms();for(let ke=0;ke<jt;ke++)Qn.setValue(W,"_gl_DrawID",ke),Rt.render(yt[ke]/xe,me[ke])}else if(q.isInstancedMesh)Rt.renderInstances(lt,_t,q.count);else if(tt.isInstancedBufferGeometry){const yt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,me=Math.min(tt.instanceCount,yt);Rt.renderInstances(lt,_t,me)}else Rt.render(lt,_t)};function Bt(P,X,tt){P.transparent===!0&&P.side===Ze&&P.forceSinglePass===!1?(P.side=xn,P.needsUpdate=!0,ui(P,X,tt),P.side=Vi,P.needsUpdate=!0,ui(P,X,tt),P.side=Ze):ui(P,X,tt)}this.compile=function(P,X,tt=null){tt===null&&(tt=P),f=Kt.get(tt),f.init(X),b.push(f),tt.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),P!==tt&&P.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),f.setupLights();const nt=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const St=q.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){const Gt=St[It];Bt(Gt,tt,q),nt.add(Gt)}else Bt(St,tt,q),nt.add(St)}),b.pop(),f=null,nt},this.compileAsync=function(P,X,tt=null){const nt=this.compile(P,X,tt);return new Promise(q=>{function St(){if(nt.forEach(function(It){j.get(It).currentProgram.isReady()&&nt.delete(It)}),nt.size===0){q(P);return}setTimeout(St,10)}te.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let ue=null;function ee(P){ue&&ue(P)}function De(){Be.stop()}function Ue(){Be.start()}const Be=new au;Be.setAnimationLoop(ee),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(P){ue=P,it.setAnimationLoop(P),P===null?Be.stop():Be.start()},it.addEventListener("sessionstart",De),it.addEventListener("sessionend",Ue),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(X),X=it.getCamera()),P.isScene===!0&&P.onBeforeRender(g,P,X,T),f=Kt.get(P,b.length),f.init(X),b.push(f),Lt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),et.setFromProjectionMatrix(Lt),xt=this.localClippingEnabled,ht=gt.init(this.clippingPlanes,xt),m=Mt.get(P,y.length),m.init(),y.push(m),it.enabled===!0&&it.isPresenting===!0){const St=g.xr.getDepthSensingMesh();St!==null&&Ke(St,X,-1/0,g.sortObjects)}Ke(P,X,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(K,at),Qt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Qt&&qt.addToRenderList(m,P),this.info.render.frame++,ht===!0&&gt.beginShadows();const tt=f.state.shadowsArray;Ut.render(tt,P,X),ht===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=m.opaque,q=m.transmissive;if(f.setupLights(),X.isArrayCamera){const St=X.cameras;if(q.length>0)for(let It=0,Gt=St.length;It<Gt;It++){const L=St[It];yn(nt,q,P,L)}Qt&&qt.render(P);for(let It=0,Gt=St.length;It<Gt;It++){const L=St[It];Rn(m,P,L,L.viewport)}}else q.length>0&&yn(nt,q,P,X),Qt&&qt.render(P),Rn(m,P,X);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(g,P,X),oe.resetDefaultState(),_=-1,x=null,b.pop(),b.length>0?(f=b[b.length-1],ht===!0&&gt.setGlobalState(g.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ke(P,X,tt,nt){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)tt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||et.intersectsSprite(P)){nt&&Wt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Lt);const It=Q.update(P),Gt=P.material;Gt.visible&&m.push(P,It,Gt,tt,Wt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||et.intersectsObject(P))){const It=Q.update(P),Gt=P.material;if(nt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Wt.copy(P.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Wt.copy(It.boundingSphere.center)),Wt.applyMatrix4(P.matrixWorld).applyMatrix4(Lt)),Array.isArray(Gt)){const L=It.groups;for(let D=0,H=L.length;D<H;D++){const Z=L[D],lt=Gt[Z.materialIndex];lt&&lt.visible&&m.push(P,It,lt,tt,Wt.z,Z)}}else Gt.visible&&m.push(P,It,Gt,tt,Wt.z,null)}}const St=P.children;for(let It=0,Gt=St.length;It<Gt;It++)Ke(St[It],X,tt,nt)}function Rn(P,X,tt,nt){const q=P.opaque,St=P.transmissive,It=P.transparent;f.setupLightsView(tt),ht===!0&&gt.setGlobalState(g.clippingPlanes,tt),nt&&Ot.viewport(C.copy(nt)),q.length>0&&gn(q,X,tt),St.length>0&&gn(St,X,tt),It.length>0&&gn(It,X,tt),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function yn(P,X,tt,nt){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[nt.id]===void 0&&(f.state.transmissionRenderTarget[nt.id]=new _n(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Fn:ai,minFilter:es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const St=f.state.transmissionRenderTarget[nt.id],It=nt.viewport||C;St.setSize(It.z,It.w);const Gt=g.getRenderTarget();g.setRenderTarget(St),g.getClearColor(U),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear(),Qt&&qt.render(tt);const L=g.toneMapping;g.toneMapping=Bi;const D=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),f.setupLightsView(nt),ht===!0&&gt.setGlobalState(g.clippingPlanes,nt),gn(P,tt,nt),R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St),te.has("WEBGL_multisampled_render_to_texture")===!1){let H=!1;for(let Z=0,lt=X.length;Z<lt;Z++){const mt=X[Z],_t=mt.object,ft=mt.geometry,Rt=mt.material,yt=mt.group;if(Rt.side===Ze&&_t.layers.test(nt.layers)){const me=Rt.side;Rt.side=xn,Rt.needsUpdate=!0,hn(_t,tt,nt,ft,Rt,yt),Rt.side=me,Rt.needsUpdate=!0,H=!0}}H===!0&&(R.updateMultisampleRenderTarget(St),R.updateRenderTargetMipmap(St))}g.setRenderTarget(Gt),g.setClearColor(U,O),D!==void 0&&(nt.viewport=D),g.toneMapping=L}function gn(P,X,tt){const nt=X.isScene===!0?X.overrideMaterial:null;for(let q=0,St=P.length;q<St;q++){const It=P[q],Gt=It.object,L=It.geometry,D=nt===null?It.material:nt,H=It.group;Gt.layers.test(tt.layers)&&hn(Gt,X,tt,L,D,H)}}function hn(P,X,tt,nt,q,St){P.onBeforeRender(g,X,tt,nt,q,St),P.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(g,X,tt,nt,P,St),q.transparent===!0&&q.side===Ze&&q.forceSinglePass===!1?(q.side=xn,q.needsUpdate=!0,g.renderBufferDirect(tt,X,nt,q,P,St),q.side=Vi,q.needsUpdate=!0,g.renderBufferDirect(tt,X,nt,q,P,St),q.side=Ze):g.renderBufferDirect(tt,X,nt,q,P,St),P.onAfterRender(g,X,tt,nt,q,St)}function ui(P,X,tt){X.isScene!==!0&&(X=ce);const nt=j.get(P),q=f.state.lights,St=f.state.shadowsArray,It=q.state.version,Gt=Et.getParameters(P,q.state,St,X,tt),L=Et.getProgramCacheKey(Gt);let D=nt.programs;nt.environment=P.isMeshStandardMaterial?X.environment:null,nt.fog=X.fog,nt.envMap=(P.isMeshStandardMaterial?G:S).get(P.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,D===void 0&&(P.addEventListener("dispose",I),D=new Map,nt.programs=D);let H=D.get(L);if(H!==void 0){if(nt.currentProgram===H&&nt.lightsStateVersion===It)return Ai(P,Gt),H}else Gt.uniforms=Et.getUniforms(P),P.onBeforeCompile(Gt,g),H=Et.acquireProgram(Gt,L),D.set(L,H),nt.uniforms=Gt.uniforms;const Z=nt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Z.clippingPlanes=gt.uniform),Ai(P,Gt),nt.needsLights=er(P),nt.lightsStateVersion=It,nt.needsLights&&(Z.ambientLightColor.value=q.state.ambient,Z.lightProbe.value=q.state.probe,Z.directionalLights.value=q.state.directional,Z.directionalLightShadows.value=q.state.directionalShadow,Z.spotLights.value=q.state.spot,Z.spotLightShadows.value=q.state.spotShadow,Z.rectAreaLights.value=q.state.rectArea,Z.ltc_1.value=q.state.rectAreaLTC1,Z.ltc_2.value=q.state.rectAreaLTC2,Z.pointLights.value=q.state.point,Z.pointLightShadows.value=q.state.pointShadow,Z.hemisphereLights.value=q.state.hemi,Z.directionalShadowMap.value=q.state.directionalShadowMap,Z.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Z.spotShadowMap.value=q.state.spotShadowMap,Z.spotLightMatrix.value=q.state.spotLightMatrix,Z.spotLightMap.value=q.state.spotLightMap,Z.pointShadowMap.value=q.state.pointShadowMap,Z.pointShadowMatrix.value=q.state.pointShadowMatrix),nt.currentProgram=H,nt.uniformsList=null,H}function tr(P){if(P.uniformsList===null){const X=P.currentProgram.getUniforms();P.uniformsList=Sa.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function Ai(P,X){const tt=j.get(P);tt.outputColorSpace=X.outputColorSpace,tt.batching=X.batching,tt.batchingColor=X.batchingColor,tt.instancing=X.instancing,tt.instancingColor=X.instancingColor,tt.instancingMorph=X.instancingMorph,tt.skinning=X.skinning,tt.morphTargets=X.morphTargets,tt.morphNormals=X.morphNormals,tt.morphColors=X.morphColors,tt.morphTargetsCount=X.morphTargetsCount,tt.numClippingPlanes=X.numClippingPlanes,tt.numIntersection=X.numClipIntersection,tt.vertexAlphas=X.vertexAlphas,tt.vertexTangents=X.vertexTangents,tt.toneMapping=X.toneMapping}function fi(P,X,tt,nt,q){X.isScene!==!0&&(X=ce),R.resetTextureUnits();const St=X.fog,It=nt.isMeshStandardMaterial?X.environment:null,Gt=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:js,L=(nt.isMeshStandardMaterial?G:S).get(nt.envMap||It),D=nt.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,H=!!tt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Z=!!tt.morphAttributes.position,lt=!!tt.morphAttributes.normal,mt=!!tt.morphAttributes.color;let _t=Bi;nt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_t=g.toneMapping);const ft=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Rt=ft!==void 0?ft.length:0,yt=j.get(nt),me=f.state.lights;if(ht===!0&&(xt===!0||P!==x)){const tn=P===x&&nt.id===_;gt.setState(nt,P,tn)}let jt=!1;nt.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==me.state.version||yt.outputColorSpace!==Gt||q.isBatchedMesh&&yt.batching===!1||!q.isBatchedMesh&&yt.batching===!0||q.isBatchedMesh&&yt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&yt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&yt.instancing===!1||!q.isInstancedMesh&&yt.instancing===!0||q.isSkinnedMesh&&yt.skinning===!1||!q.isSkinnedMesh&&yt.skinning===!0||q.isInstancedMesh&&yt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&yt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&yt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&yt.instancingMorph===!1&&q.morphTexture!==null||yt.envMap!==L||nt.fog===!0&&yt.fog!==St||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==gt.numPlanes||yt.numIntersection!==gt.numIntersection)||yt.vertexAlphas!==D||yt.vertexTangents!==H||yt.morphTargets!==Z||yt.morphNormals!==lt||yt.morphColors!==mt||yt.toneMapping!==_t||yt.morphTargetsCount!==Rt)&&(jt=!0):(jt=!0,yt.__version=nt.version);let xe=yt.currentProgram;jt===!0&&(xe=ui(nt,X,q));let Qn=!1,ke=!1,Bn=!1;const _e=xe.getUniforms(),vn=yt.uniforms;if(Ot.useProgram(xe.program)&&(Qn=!0,ke=!0,Bn=!0),nt.id!==_&&(_=nt.id,ke=!0),Qn||x!==P){Ot.buffers.depth.getReversed()?(dt.copy(P.projectionMatrix),zf(dt),Of(dt),_e.setValue(W,"projectionMatrix",dt)):_e.setValue(W,"projectionMatrix",P.projectionMatrix),_e.setValue(W,"viewMatrix",P.matrixWorldInverse);const Sn=_e.map.cameraPosition;Sn!==void 0&&Sn.setValue(W,Ft.setFromMatrixPosition(P.matrixWorld)),$t.logarithmicDepthBuffer&&_e.setValue(W,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&_e.setValue(W,"isOrthographic",P.isOrthographicCamera===!0),x!==P&&(x=P,ke=!0,Bn=!0)}if(q.isSkinnedMesh){_e.setOptional(W,q,"bindMatrix"),_e.setOptional(W,q,"bindMatrixInverse");const tn=q.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),_e.setValue(W,"boneTexture",tn.boneTexture,R))}q.isBatchedMesh&&(_e.setOptional(W,q,"batchingTexture"),_e.setValue(W,"batchingTexture",q._matricesTexture,R),_e.setOptional(W,q,"batchingIdTexture"),_e.setValue(W,"batchingIdTexture",q._indirectTexture,R),_e.setOptional(W,q,"batchingColorTexture"),q._colorsTexture!==null&&_e.setValue(W,"batchingColorTexture",q._colorsTexture,R));const ti=tt.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&Zt.update(q,tt,xe),(ke||yt.receiveShadow!==q.receiveShadow)&&(yt.receiveShadow=q.receiveShadow,_e.setValue(W,"receiveShadow",q.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(vn.envMap.value=L,vn.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&X.environment!==null&&(vn.envMapIntensity.value=X.environmentIntensity),ke&&(_e.setValue(W,"toneMappingExposure",g.toneMappingExposure),yt.needsLights&&rc(vn,Bn),St&&nt.fog===!0&&pt.refreshFogUniforms(vn,St),pt.refreshMaterialUniforms(vn,nt,B,Y,f.state.transmissionRenderTarget[P.id]),Sa.upload(W,tr(yt),vn,R)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Sa.upload(W,tr(yt),vn,R),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&_e.setValue(W,"center",q.center),_e.setValue(W,"modelViewMatrix",q.modelViewMatrix),_e.setValue(W,"normalMatrix",q.normalMatrix),_e.setValue(W,"modelMatrix",q.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const tn=nt.uniformsGroups;for(let Sn=0,kn=tn.length;Sn<kn;Sn++){const ps=tn[Sn];V.update(ps,xe),V.bind(ps,xe)}}return xe}function rc(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function er(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,X,tt){j.get(P.texture).__webglTexture=X,j.get(P.depthTexture).__webglTexture=tt;const nt=j.get(P);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=tt===void 0,nt.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,X){const tt=j.get(P);tt.__webglFramebuffer=X,tt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(P,X=0,tt=0){T=P,E=X,w=tt;let nt=!0,q=null,St=!1,It=!1;if(P){const L=j.get(P);if(L.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(W.FRAMEBUFFER,null),nt=!1;else if(L.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(L.__hasExternalTextures)R.rebindTextures(P,j.get(P.texture).__webglTexture,j.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Z=P.depthTexture;if(L.__boundDepthTexture!==Z){if(Z!==null&&j.has(Z)&&(P.width!==Z.image.width||P.height!==Z.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const D=P.texture;(D.isData3DTexture||D.isDataArrayTexture||D.isCompressedArrayTexture)&&(It=!0);const H=j.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(H[X])?q=H[X][tt]:q=H[X],St=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?q=j.get(P).__webglMultisampledFramebuffer:Array.isArray(H)?q=H[tt]:q=H,C.copy(P.viewport),N.copy(P.scissor),z=P.scissorTest}else C.copy(ct).multiplyScalar(B).floor(),N.copy(vt).multiplyScalar(B).floor(),z=Xt;if(Ot.bindFramebuffer(W.FRAMEBUFFER,q)&&nt&&Ot.drawBuffers(P,q),Ot.viewport(C),Ot.scissor(N),Ot.setScissorTest(z),St){const L=j.get(P.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,L.__webglTexture,tt)}else if(It){const L=j.get(P.texture),D=X||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,L.__webglTexture,tt||0,D)}_=-1},this.readRenderTargetPixels=function(P,X,tt,nt,q,St,It){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=j.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt){Ot.bindFramebuffer(W.FRAMEBUFFER,Gt);try{const L=P.texture,D=L.format,H=L.type;if(!$t.textureFormatReadable(D)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(H)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-nt&&tt>=0&&tt<=P.height-q&&W.readPixels(X,tt,nt,q,Yt.convert(D),Yt.convert(H),St)}finally{const L=T!==null?j.get(T).__webglFramebuffer:null;Ot.bindFramebuffer(W.FRAMEBUFFER,L)}}},this.readRenderTargetPixelsAsync=async function(P,X,tt,nt,q,St,It){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=j.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt){const L=P.texture,D=L.format,H=L.type;if(!$t.textureFormatReadable(D))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(H))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=P.width-nt&&tt>=0&&tt<=P.height-q){Ot.bindFramebuffer(W.FRAMEBUFFER,Gt);const Z=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Z),W.bufferData(W.PIXEL_PACK_BUFFER,St.byteLength,W.STREAM_READ),W.readPixels(X,tt,nt,q,Yt.convert(D),Yt.convert(H),0);const lt=T!==null?j.get(T).__webglFramebuffer:null;Ot.bindFramebuffer(W.FRAMEBUFFER,lt);const mt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Ff(W,mt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Z),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,St),W.deleteBuffer(Z),W.deleteSync(mt),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,X=null,tt=0){P.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,P=arguments[1]);const nt=Math.pow(2,-tt),q=Math.floor(P.image.width*nt),St=Math.floor(P.image.height*nt),It=X!==null?X.x:0,Gt=X!==null?X.y:0;R.setTexture2D(P,0),W.copyTexSubImage2D(W.TEXTURE_2D,tt,0,0,It,Gt,q,St),Ot.unbindTexture()},this.copyTextureToTexture=function(P,X,tt=null,nt=null,q=0){P.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,P=arguments[1],X=arguments[2],q=arguments[3]||0,tt=null);let St,It,Gt,L,D,H,Z,lt,mt;const _t=P.isCompressedTexture?P.mipmaps[q]:P.image;tt!==null?(St=tt.max.x-tt.min.x,It=tt.max.y-tt.min.y,Gt=tt.isBox3?tt.max.z-tt.min.z:1,L=tt.min.x,D=tt.min.y,H=tt.isBox3?tt.min.z:0):(St=_t.width,It=_t.height,Gt=_t.depth||1,L=0,D=0,H=0),nt!==null?(Z=nt.x,lt=nt.y,mt=nt.z):(Z=0,lt=0,mt=0);const ft=Yt.convert(X.format),Rt=Yt.convert(X.type);let yt;X.isData3DTexture?(R.setTexture3D(X,0),yt=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(R.setTexture2DArray(X,0),yt=W.TEXTURE_2D_ARRAY):(R.setTexture2D(X,0),yt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const me=W.getParameter(W.UNPACK_ROW_LENGTH),jt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),xe=W.getParameter(W.UNPACK_SKIP_PIXELS),Qn=W.getParameter(W.UNPACK_SKIP_ROWS),ke=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,_t.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,_t.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,L),W.pixelStorei(W.UNPACK_SKIP_ROWS,D),W.pixelStorei(W.UNPACK_SKIP_IMAGES,H);const Bn=P.isDataArrayTexture||P.isData3DTexture,_e=X.isDataArrayTexture||X.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const vn=j.get(P),ti=j.get(X),tn=j.get(vn.__renderTarget),Sn=j.get(ti.__renderTarget);Ot.bindFramebuffer(W.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ot.bindFramebuffer(W.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let kn=0;kn<Gt;kn++)Bn&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,j.get(P).__webglTexture,q,H+kn),P.isDepthTexture?(_e&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,j.get(X).__webglTexture,q,mt+kn),W.blitFramebuffer(L,D,St,It,Z,lt,St,It,W.DEPTH_BUFFER_BIT,W.NEAREST)):_e?W.copyTexSubImage3D(yt,q,Z,lt,mt+kn,L,D,St,It):W.copyTexSubImage2D(yt,q,Z,lt,mt+kn,L,D,St,It);Ot.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else _e?P.isDataTexture||P.isData3DTexture?W.texSubImage3D(yt,q,Z,lt,mt,St,It,Gt,ft,Rt,_t.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(yt,q,Z,lt,mt,St,It,Gt,ft,_t.data):W.texSubImage3D(yt,q,Z,lt,mt,St,It,Gt,ft,Rt,_t):P.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,q,Z,lt,St,It,ft,Rt,_t.data):P.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,q,Z,lt,_t.width,_t.height,ft,_t.data):W.texSubImage2D(W.TEXTURE_2D,q,Z,lt,St,It,ft,Rt,_t);W.pixelStorei(W.UNPACK_ROW_LENGTH,me),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,jt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,xe),W.pixelStorei(W.UNPACK_SKIP_ROWS,Qn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ke),q===0&&X.generateMipmaps&&W.generateMipmap(yt),Ot.unbindTexture()},this.copyTextureToTexture3D=function(P,X,tt=null,nt=null,q=0){return P.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,nt=arguments[1]||null,P=arguments[2],X=arguments[3],q=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,X,tt,nt,q)},this.initRenderTarget=function(P){j.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Ot.unbindTexture()},this.resetState=function(){E=0,w=0,T=null,Ot.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}class Yl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new Yl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yg extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Fa extends cn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ln,u=ln,h,p){super(null,a,o,l,c,u,s,r,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sh extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ds=new ve,rh=new ve,ea=[],ah=new hs,jg=new ve,or=new Jt,lr=new Ks;class an extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),ah.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(ah)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ks),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),lr.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),t.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),rh.multiplyMatrices(n,Ds),or.matrixWorld=rh,or.raycast(t,ea);for(let a=0,o=ea.length;a<o;a++){const l=ea[a];l.instanceId=r,l.object=this,e.push(l)}ea.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fa(new Float32Array(s*this.count),s,this.count,Ua,$n));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class za extends us{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const oh=new ve,yl=new Vl,na=new Ks,ia=new F;class jl extends Ce{constructor(t=new Re,e=new za){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;oh.copy(s).invert(),yl.copy(t.ray).applyMatrix4(oh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=p,M=d;v<M;v++){const m=c.getX(v);ia.fromBufferAttribute(h,m),lh(ia,m,l,s,t,e,this)}}else{const p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let v=p,M=d;v<M;v++)ia.fromBufferAttribute(h,v),lh(ia,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lh(i,t,e,n,s,r,a){const o=yl.distanceSqToPoint(i);if(o<e){const l=new F;yl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Fi extends cn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],p=n[s+1]-u,d=(a-u)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,s=[],r=[],a=[],o=new F,l=new ve;for(let d=0;d<=t;d++){const v=d/t;s[d]=this.getTangentAt(v,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos($e(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos($e(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $l extends hi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*h+this.aX,c=p*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $g extends $l{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Zl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;p*=u,d*=u,s(a,o,p,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const sa=new F,Mo=new Zl,yo=new Zl,So=new Zl;class Kl extends hi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(sa.subVectors(s[0],s[1]).add(s[0]),c=sa);const h=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(sa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=sa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),d),M=Math.pow(h.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(u),d);M<1e-4&&(M=1),v<1e-4&&(v=M),m<1e-4&&(m=M),Mo.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,v,M,m),yo.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,v,M,m),So.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,v,M,m)}else this.curveType==="catmullrom"&&(Mo.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),yo.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),So.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set(Mo.calc(l),yo.calc(l),So.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ch(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Zg(i,t){const e=1-i;return e*e*t}function Kg(i,t){return 2*(1-i)*i*t}function Jg(i,t){return i*i*t}function vr(i,t,e,n){return Zg(i,t)+Kg(i,e)+Jg(i,n)}function Qg(i,t){const e=1-i;return e*e*e*t}function tv(i,t){const e=1-i;return 3*e*e*i*t}function ev(i,t){return 3*(1-i)*i*i*t}function nv(i,t){return i*i*i*t}function xr(i,t,e,n,s){return Qg(i,t)+tv(i,e)+ev(i,n)+nv(i,s)}class uu extends hi{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,s.x,r.x,a.x,o.x),xr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class iv extends hi{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xr(t,s.x,r.x,a.x,o.x),xr(t,s.y,r.y,a.y,o.y),xr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fu extends hi{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sv extends hi{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class du extends hi{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(t,s.x,r.x,a.x),vr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rv extends hi{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(t,s.x,r.x,a.x),vr(t,s.y,r.y,a.y),vr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pu extends hi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(ch(o,l.x,c.x,u.x,h.x),ch(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}}var hh=Object.freeze({__proto__:null,ArcCurve:$g,CatmullRomCurve3:Kl,CubicBezierCurve:uu,CubicBezierCurve3:iv,EllipseCurve:$l,LineCurve:fu,LineCurve3:sv,QuadraticBezierCurve:du,QuadraticBezierCurve3:rv,SplineCurve:pu});class av extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new hh[s.type]().fromJSON(s))}return this}}class ov extends av{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new fu(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new du(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new uu(this.currentPoint.clone(),new Tt(t,e),new Tt(n,s),new Tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new pu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new $l(t,e,n,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Jl extends Re{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=$e(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,h=new F,p=new Tt,d=new F,v=new F,M=new F;let m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,d.x=f*1,d.y=-m,d.z=f*0,M.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,d.x=f*1,d.y=-m,d.z=f*0,v.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),l.push(d.x,d.y,d.z),M.copy(v)}for(let y=0;y<=e;y++){const b=n+y*u*s,g=Math.sin(b),A=Math.cos(b);for(let E=0;E<=t.length-1;E++){h.x=t[E].x*g,h.y=t[E].y,h.z=t[E].x*A,a.push(h.x,h.y,h.z),p.x=y/e,p.y=E/(t.length-1),o.push(p.x,p.y);const w=l[3*E+0]*g,T=l[3*E+1],_=l[3*E+0]*A;c.push(w,T,_)}}for(let y=0;y<e;y++)for(let b=0;b<t.length-1;b++){const g=b+y*t.length,A=g,E=g+t.length,w=g+t.length+1,T=g+1;r.push(A,E,T),r.push(w,T,E)}this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jl(t.points,t.segments,t.phiStart,t.phiLength)}}class Oa extends Jl{constructor(t=1,e=1,n=4,s=8){const r=new ov;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Oa(t.radius,t.length,t.capSegments,t.radialSegments)}}class qs extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new F,u=new Tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=e;h++,p+=3){const d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[p]/t+1)/2,u.y=(a[p+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Pe extends Re{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],p=[],d=[];let v=0;const M=[],m=n/2;let f=0;y(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(p,3)),this.setAttribute("uv",new se(d,2));function y(){const g=new F,A=new F;let E=0;const w=(e-t)/n;for(let T=0;T<=r;T++){const _=[],x=T/r,C=x*(e-t)+t;for(let N=0;N<=s;N++){const z=N/s,U=z*l+o,O=Math.sin(U),k=Math.cos(U);A.x=C*O,A.y=-x*n+m,A.z=C*k,h.push(A.x,A.y,A.z),g.set(O,w,k).normalize(),p.push(g.x,g.y,g.z),d.push(z,1-x),_.push(v++)}M.push(_)}for(let T=0;T<s;T++)for(let _=0;_<r;_++){const x=M[_][T],C=M[_+1][T],N=M[_+1][T+1],z=M[_][T+1];(t>0||_!==0)&&(u.push(x,C,z),E+=3),(e>0||_!==r-1)&&(u.push(C,N,z),E+=3)}c.addGroup(f,E,0),f+=E}function b(g){const A=v,E=new Tt,w=new F;let T=0;const _=g===!0?t:e,x=g===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*x,0),p.push(0,x,0),d.push(.5,.5),v++;const C=v;for(let N=0;N<=s;N++){const U=N/s*l+o,O=Math.cos(U),k=Math.sin(U);w.x=_*k,w.y=m*x,w.z=_*O,h.push(w.x,w.y,w.z),p.push(0,x,0),E.x=O*.5+.5,E.y=k*.5*x+.5,d.push(E.x,E.y),v++}for(let N=0;N<s;N++){const z=A+N,U=C+N;g===!0?u.push(U,U+1,z):u.push(U+1,U,z),T+=3}c.addGroup(f,T,g===!0?1:2),f+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wi extends Pe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new wi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ur extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const b=new F,g=new F,A=new F;for(let E=0;E<e.length;E+=3)d(e[E+0],b),d(e[E+1],g),d(e[E+2],A),l(b,g,A,y)}function l(y,b,g,A){const E=A+1,w=[];for(let T=0;T<=E;T++){w[T]=[];const _=y.clone().lerp(g,T/E),x=b.clone().lerp(g,T/E),C=E-T;for(let N=0;N<=C;N++)N===0&&T===E?w[T][N]=_:w[T][N]=_.clone().lerp(x,N/C)}for(let T=0;T<E;T++)for(let _=0;_<2*(E-T)-1;_++){const x=Math.floor(_/2);_%2===0?(p(w[T][x+1]),p(w[T+1][x]),p(w[T][x])):(p(w[T][x+1]),p(w[T+1][x+1]),p(w[T+1][x]))}}function c(y){const b=new F;for(let g=0;g<r.length;g+=3)b.x=r[g+0],b.y=r[g+1],b.z=r[g+2],b.normalize().multiplyScalar(y),r[g+0]=b.x,r[g+1]=b.y,r[g+2]=b.z}function u(){const y=new F;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];const g=m(y)/2/Math.PI+.5,A=f(y)/Math.PI+.5;a.push(g,1-A)}v(),h()}function h(){for(let y=0;y<a.length;y+=6){const b=a[y+0],g=a[y+2],A=a[y+4],E=Math.max(b,g,A),w=Math.min(b,g,A);E>.9&&w<.1&&(b<.2&&(a[y+0]+=1),g<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function d(y,b){const g=y*3;b.x=t[g+0],b.y=t[g+1],b.z=t[g+2]}function v(){const y=new F,b=new F,g=new F,A=new F,E=new Tt,w=new Tt,T=new Tt;for(let _=0,x=0;_<r.length;_+=9,x+=6){y.set(r[_+0],r[_+1],r[_+2]),b.set(r[_+3],r[_+4],r[_+5]),g.set(r[_+6],r[_+7],r[_+8]),E.set(a[x+0],a[x+1]),w.set(a[x+2],a[x+3]),T.set(a[x+4],a[x+5]),A.copy(y).add(b).add(g).divideScalar(3);const C=m(A);M(E,x+0,y,C),M(w,x+2,b,C),M(T,x+4,g,C)}}function M(y,b,g,A){A<0&&y.x===1&&(a[b]=y.x-1),g.x===0&&g.z===0&&(a[b]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.vertices,t.indices,t.radius,t.details)}}class Ba extends Ur{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ba(t.radius,t.detail)}}class ki extends Ur{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ki(t.radius,t.detail)}}class wr extends Ur{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wr(t.radius,t.detail)}}class fs extends Re{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=t;const p=(e-t)/s,d=new F,v=new Tt;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const f=r+m/n*a;d.x=h*Math.cos(f),d.y=h*Math.sin(f),l.push(d.x,d.y,d.z),c.push(0,0,1),v.x=(d.x/e+1)/2,v.y=(d.y/e+1)/2,u.push(v.x,v.y)}h+=p}for(let M=0;M<s;M++){const m=M*(n+1);for(let f=0;f<n;f++){const y=f+m,b=y,g=y+n+1,A=y+n+2,E=y+1;o.push(b,g,E),o.push(g,A,E)}}this.setIndex(o),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class li extends Re{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new F,p=new F,d=[],v=[],M=[],m=[];for(let f=0;f<=n;f++){const y=[],b=f/n;let g=0;f===0&&a===0?g=.5/e:f===n&&l===Math.PI&&(g=-.5/e);for(let A=0;A<=e;A++){const E=A/e;h.x=-t*Math.cos(s+E*r)*Math.sin(a+b*o),h.y=t*Math.cos(a+b*o),h.z=t*Math.sin(s+E*r)*Math.sin(a+b*o),v.push(h.x,h.y,h.z),p.copy(h).normalize(),M.push(p.x,p.y,p.z),m.push(E+g,1-b),y.push(c++)}u.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const b=u[f][y+1],g=u[f][y],A=u[f+1][y],E=u[f+1][y+1];(f!==0||a>0)&&d.push(b,g,E),(f!==n-1||l<Math.PI)&&d.push(g,A,E)}this.setIndex(d),this.setAttribute("position",new se(v,3)),this.setAttribute("normal",new se(M,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Er extends Re{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new F,h=new F,p=new F;for(let d=0;d<=n;d++)for(let v=0;v<=s;v++){const M=v/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(M),h.y=(t+e*Math.cos(m))*Math.sin(M),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(v/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let v=1;v<=s;v++){const M=(s+1)*d+v-1,m=(s+1)*(d-1)+v-1,f=(s+1)*(d-1)+v,y=(s+1)*d+v;a.push(M,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class lv extends Ne{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class cv extends us{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Fe extends us{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ql extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class hv extends Ql{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const bo=new ve,uh=new F,fh=new F;class mu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(uh),fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fh),e.updateMatrixWorld(),bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const dh=new ve,cr=new F,wo=new F;class uv extends mu{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cr.setFromMatrixPosition(t.matrixWorld),n.position.copy(cr),wo.copy(n.position),wo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wo),n.updateMatrixWorld(),s.makeTranslation(-cr.x,-cr.y,-cr.z),dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh)}}class Tr extends Ql{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new uv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class fv extends mu{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dv extends Ql{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new fv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ph();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ph(){return performance.now()}const mh=new ve;class pv{constructor(t,e,n=0,s=1/0){this.ray=new Vl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mh),this}intersectObject(t,e=!0,n=[]){return Sl(t,this,n,e),n.sort(gh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Sl(t[s],this,n,e);return n.sort(gh),n}}function gh(i,t){return i.distance-t.distance}function Sl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Sl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pl);const sn=(i,t={})=>new Fe({color:i,flatShading:!0,...t});function ra(i){const t=i.map(a=>a.toNonIndexed()),e=t.reduce((a,o)=>a+o.attributes.position.count,0),n=new Float32Array(e*3);let s=0;for(const a of t)n.set(a.attributes.position.array,s),s+=a.attributes.position.array.length;const r=new Re;return r.setAttribute("position",new ze(n,3)),r.computeVertexNormals(),r}function mv(i,t,e,n,s,r){const a=r.id,{heightAt:o,pathDist:l,plinths:c}=t,u=t.lighthouse.pos,h=new Ce,p=new wt,d=[],v=(I,ot,Dt,Bt=2,ue=5)=>l(I,ot)>Dt&&Math.hypot(I-u.x,ot-u.z)>ue&&!c.some(ee=>Math.hypot(ee.x-I,ee.z-ot)<Bt),M=(I,ot,Dt=I*20)=>{const Bt=[];for(let ue=0;ue<Dt&&Bt.length<I;ue++){const ee=(n()-.5)*104,De=(n()-.5)*104,Ue=o(ee,De);ot(ee,De,Ue)&&Bt.push({x:ee,z:De,h:Ue,r:n(),s:n()})}return Bt},m=(I,ot,Dt,Bt,ue=!1)=>{const ee=new an(I,ot,Math.max(1,Dt.length));return ee.count=Dt.length,Dt.forEach((De,Ue)=>{Bt(De,Ue,ee),h.updateMatrix(),ee.setMatrixAt(Ue,h.matrix)}),ee.instanceColor&&(ee.instanceColor.needsUpdate=!0),ee.castShadow=ue,ee.receiveShadow=!0,i.add(ee),ee},f=(e.mobile?.55:1)*1.8,y=ra([-.5,0,.5].map(I=>{const ot=new wi(.07,.55,3);return ot.translate(0,.27,0),ot.rotateZ(I*.5),ot.translate(I*.12,0,(I*I-.2)*.1),ot})),b=M(Math.round(280*f),(I,ot,Dt)=>Dt>.8&&v(I,ot,1.7,1.7,4.4));m(y,sn("#ffffff"),b,(I,ot,Dt)=>{h.position.set(I.x,I.h-.05,I.z),h.rotation.set(0,I.r*6,0),h.scale.setScalar(.8+I.s*.7),Dt.setColorAt(ot,p.set(a==="vinter"?I.s<.5?"#c8d4c0":"#e6eef4":a==="vulkan"?I.s<.5?"#5a6a3a":"#7a7a4a":I.s<.5?"#7fae4e":"#9cc45e"))});const g=M(Math.round((a==="vinter"?0:a==="vulkan"?30:120)*f),(I,ot,Dt)=>Dt>.85&&v(I,ot,1.9,2,4.5)),A=new Pe(.025,.03,.4,4);A.translate(0,.2,0);const E=new ki(.11,0);E.translate(0,.42,0);const w=["#ff8fb0","#ffd54a","#ffffff","#b58cff","#ff7a4a"];m(A,sn("#5f8f3a"),g,I=>{h.position.set(I.x,I.h-.03,I.z),h.rotation.set(0,0,0),h.scale.setScalar(.9+I.s*.6)}),m(E,sn("#ffffff"),g,(I,ot,Dt)=>{h.position.set(I.x,I.h-.03,I.z),h.scale.setScalar(.9+I.s*.6),Dt.setColorAt(ot,p.set(w[Math.floor(I.r*w.length)]))});const T=M(Math.round((a==="tak"?36:0)*f),(I,ot,Dt)=>Dt>1&&v(I,ot,2.4,2.4,5)),_=new li(.22,8,4,0,Math.PI*2,0,Math.PI/2);_.scale(1,.7,1),_.translate(0,.28,0);const x=new Pe(.07,.09,.3,6);x.translate(0,.14,0),m(x,sn("#f4ead6"),T,I=>{h.position.set(I.x,I.h-.03,I.z),h.rotation.set(0,0,(I.r-.5)*.3),h.scale.setScalar(.8+I.s)},!0),m(_,sn("#ffffff"),T,(I,ot,Dt)=>{h.position.set(I.x,I.h-.03,I.z),h.rotation.set(0,0,(I.r-.5)*.3),h.scale.setScalar(.8+I.s),Dt.setColorAt(ot,p.set(I.r<.6?"#d8453a":"#c89a5a"))},!0);const C=ra([[-.08,0],[.07,.05],[0,-.07]].map(([I,ot],Dt)=>{const Bt=new wi(.04,1.1+Dt*.2,3);return Bt.translate(I,.55+Dt*.1,ot),Bt}).concat([(()=>{const I=new Oa(.05,.18,2,4);return I.translate(.07,1.25,.05),I})()])),N=M(Math.round(150*f),(I,ot,Dt)=>Dt>.05&&Dt<.55&&v(I,ot,2.2,2,5),6e3),z=m(C,sn(a==="vinter"?"#a89878":a==="vulkan"?"#5a5a3a":"#9aa856"),N,I=>{h.position.set(I.x,I.h-.1,I.z),h.rotation.set(0,I.r*6,0),h.scale.setScalar(.8+I.s*.6)}),U=[],O=[];for(const I of t.paths)for(const ot of[-1,1]){let Dt=null,Bt=0,ue=0;for(let ee=2;ee<I.length-7;ee+=1.7){const De=ee/I.length,Ue=I.curve.getPointAt(De),Be=I.curve.getTangentAt(De),Ke=Ue.x-Be.z*ot*2.25,Rn=Ue.z+Be.x*ot*2.25,yn=o(Ke,Rn);if(!(yn>.5&&ue<=0&&v(Ke,Rn,1.9,2.6,6))){Dt=null,ue>0&&ue--;continue}U.push({x:Ke,z:Rn,h:yn}),Dt&&O.push({a:Dt,b:{x:Ke,z:Rn,h:yn}}),Dt={x:Ke,z:Rn,h:yn},++Bt>4+Math.floor(n()*5)&&(Bt=0,Dt=null,ue=3+Math.floor(n()*5))}}const k=new En(.14,.8,.14);k.translate(0,.4,0);const Y=new En(1,.07,.06),B=sn("#a07650");m(k,B,U,I=>{h.position.set(I.x,I.h-.05,I.z),h.rotation.set(0,n()*.3,(n()-.5)*.12),h.scale.set(1,1,1)},!0);const K=O.flatMap(I=>[{...I,y:.32},{...I,y:.62}]);m(Y,B,K,({a:I,b:ot,y:Dt})=>{const Bt=Math.hypot(ot.x-I.x,ot.z-I.z);h.position.set((I.x+ot.x)/2,(I.h+ot.h)/2+Dt-.05,(I.z+ot.z)/2),h.rotation.set(0,-Math.atan2(ot.z-I.z,ot.x-I.x),0),h.scale.set(Bt,1,1)},!0);const at=r.dockTheta??-2.35,ct=new Tt(Math.cos(at),Math.sin(at)),vt=s(at);let Xt=vt-6;for(let I=vt-10;I<vt+4;I+=.25)if(o(ct.x*I,ct.y*I)<.3){Xt=I;break}const et=new Me,ht=sn("#b48a5e"),xt=sn("#6e4a2c"),dt=8,Lt=Xt-2.5;for(let I=0;I<dt/.55;I++){const ot=new Jt(new En(.5,.12,2.2),ht);ot.position.set(Lt+I*.55,.75+(n()-.5)*.04,0),ot.rotation.y=(n()-.5)*.05,ot.castShadow=ot.receiveShadow=!0,et.add(ot)}for(let I=0;I<=dt;I+=2)for(const ot of[-1,1]){const Dt=new Jt(new Pe(.12,.12,2.2,6),xt);Dt.position.set(Lt+I,.1,ot*1.05),Dt.castShadow=!0,et.add(Dt)}et.rotation.y=-at,i.add(et);const Ft=new Me,Wt=new Pe(.9,.9,3.4,10,1,!0,0,Math.PI);Wt.rotateZ(Math.PI/2),Wt.rotateX(Math.PI/2),Wt.scale(1,.6,.7);const ce=new Jt(Wt,sn("#3f6f9a",{side:Ze}));ce.rotation.y=Math.PI/2,ce.castShadow=!0,Ft.add(ce);for(const I of[-.6,.6]){const ot=new Jt(new En(.3,.08,1.2),ht);ot.position.set(I,-.15,0),Ft.add(ot)}const Qt=new Jt(new En(2.4,.06,.12),ht);Qt.position.set(.2,.05,.4),Qt.rotation.y=.3,Ft.add(Qt);const pe=ct.x*(Lt+dt-1)+-ct.y*2.1,W=ct.y*(Lt+dt-1)+ct.x*2.1;Ft.position.set(pe,.3,W),Ft.rotation.y=-at,i.add(Ft);const Ee=new Me,te=new Jt(new Jn(3,1.4,10,5),new be({color:"#4a3a2a",wireframe:!0}));te.position.y=1;const $t=te.geometry.attributes.position;for(let I=0;I<$t.count;I++)$t.setZ(I,Math.sin($t.getX(I)/3*Math.PI+1.5)*.15-Math.abs($t.getY(I))*.05);Ee.add(te);for(const I of[-1.6,1.6]){const ot=new Jt(new Pe(.07,.09,2,5),xt);ot.position.set(I,.9,0),ot.castShadow=!0,Ee.add(ot)}for(let I=0;I<5;I++){const ot=new Jt(new li(.09,6,4),sn("#f0a43a"));ot.position.set(-1.2+I*.6,1.66,.05),Ee.add(ot)}const Ot=Xt-4.5,he=4.2,j=ct.x*Ot-ct.y*he,R=ct.y*Ot+ct.x*he;Ee.position.set(j,o(j,R)-.1,R),Ee.rotation.y=-at+Math.PI/2,i.add(Ee),d.push({x:j,z:R,r:1.4});const S=new Pe(.42,.42,.95,10);S.translate(0,.47,0);const G=new Pe(.44,.44,.08,10),$=new En(.8,.8,.8);$.translate(0,.4,0);const J=[],Q=(I,ot,Dt,Bt)=>{for(let ue=0;ue<60&&Dt>0;ue++){const ee=I+(n()-.5)*6,De=ot+(n()-.5)*6,Ue=o(ee,De);Ue<.4||!v(ee,De,2.3,2.4,4.6)||J.some(Be=>Math.hypot(Be.x-ee,Be.z-De)<1.1)||(J.push({x:ee,z:De,h:Ue,kind:Bt??(n()<.6?"barrel":"crate"),r:n()}),Dt--)}};Q(ct.x*(Xt-2.5),ct.y*(Xt-2.5),5),Q(u.x+6,u.z+1,3,"barrel"),Q(u.x-6,u.z+2,2);const Et=J.filter(I=>I.kind==="barrel"),pt=J.filter(I=>I.kind==="crate");m(S,sn("#8a5a36"),Et,I=>{h.position.set(I.x,I.h-.05,I.z),h.rotation.set(0,I.r*6,0),h.scale.setScalar(1)},!0),m(G,sn("#3e3a38"),Et.flatMap(I=>[{...I,y:.2},{...I,y:.75}]),I=>{h.position.set(I.x,I.h-.05+I.y,I.z)},!1),m($,sn("#b8925e"),pt,I=>{h.position.set(I.x,I.h-.05,I.z),h.rotation.set(0,I.r*6,0),h.scale.setScalar(.8+I.r*.4)},!0);for(const I of J)d.push({x:I.x,z:I.z,r:.55});const Mt=M(Math.round(380*f),(I,ot,Dt)=>Dt>.9&&v(I,ot,1.6,1.6,4.4)),Kt=new ki(.06,0);Kt.translate(0,.06,0),m(Kt,new Fe({color:a==="vulkan"?"#ff9a5a":"#fffdf4"}),Mt,I=>{h.position.set(I.x,I.h-.02,I.z),h.rotation.set(0,0,0),h.scale.setScalar(.8+I.s*.8)});const gt=(I,ot,Dt)=>{const Bt=[];for(let ue=0;ue<I*40&&Bt.length<I;ue++){const ee=(n()-.5)*130,De=(n()-.5)*130,Ue=o(ee,De),Be=.05-Ue;Be>ot&&Be<Dt&&Math.hypot(ee-u.x,De-u.z)>6&&Bt.push({x:ee,z:De,h:Ue,r:n(),s:n()})}return Bt},Ut=ra([0,1,2].map(I=>{const ot=new wi(.08,.9+I*.25,3);return ot.translate((I-1)*.12,.45+I*.12,I%2*.1),ot.rotateZ((I-1)*.25),ot})),qt=gt(Math.round(90*f),.35,1.8),Zt=m(Ut,sn("#4f9a5a"),qt,I=>{h.position.set(I.x,I.h,I.z),h.rotation.set(0,I.r*6,0),h.scale.setScalar(.8+I.s*.7)}),Nt=ra([[0,0,.32],[.3,.1,.22],[-.25,.05,.26],[.05,.3,.2]].map(([I,ot,Dt])=>{const Bt=new ki(Dt,0);return Bt.translate(I,Dt*.8,ot),Bt})),ne=gt(Math.round((a==="tak"?28:0)*f),.5,1.6),Yt=["#b58cff","#ff8fa8","#ffc65a","#7fd6ff"];m(Nt,sn("#ffffff"),ne,(I,ot,Dt)=>{h.position.set(I.x,I.h,I.z),h.rotation.set(0,I.r*6,0),h.scale.setScalar(.8+I.s*.9),Dt.setColorAt(ot,p.set(Yt[Math.floor(I.r*Yt.length)]))});const oe=new wr(.16,0);oe.scale(.45,.3,1.4);const V=gt(e.mobile?5:8,.9,2.6).map(I=>({...I,rad:2+I.s*3,speed:(.25+I.r*.3)*(I.r<.5?1:-1)})),bt=9,it=new an(oe,new be({color:"#2f5f72",transparent:!0,opacity:.75}),Math.max(1,V.length*bt));it.count=V.length*bt,it.renderOrder=1,i.add(it);const ut=Array.from({length:bt},()=>[(n()-.5)*1.4,(n()-.5)*.25,(n()-.5)*1.4,n()*6]),At=I=>{Ft.position.y=.3+Math.sin(I*1.2)*.08,Ft.rotation.z=Math.sin(I*.9)*.04,Ft.rotation.x=Math.sin(I*1.3+1)*.03,V.forEach((ot,Dt)=>{const Bt=I*ot.speed+ot.r*6,ue=ot.x+Math.cos(Bt)*ot.rad,ee=ot.z+Math.sin(Bt)*ot.rad,De=Math.atan2(-Math.sin(Bt)*ot.speed,Math.cos(Bt)*ot.speed);for(let Ue=0;Ue<bt;Ue++){const[Be,Ke,Rn,yn]=ut[Ue];h.position.set(ue+Be+Math.sin(I*2+yn)*.1,Math.max(o(ue,ee)+.25,-.75)+Ke,ee+Rn),h.rotation.set(0,De+Math.sin(I*6+yn)*.15,0),h.scale.setScalar(1),h.updateMatrix(),it.setMatrixAt(Dt*bt+Ue,h.matrix)}}),it.instanceMatrix.needsUpdate=!0,!((I*60|0)%2)&&(N.forEach((ot,Dt)=>{h.position.set(ot.x,ot.h-.1,ot.z),h.rotation.set(Math.sin(I*1.7+ot.x*.3)*.08,ot.r*6,Math.cos(I*1.4+ot.z*.3)*.08),h.scale.setScalar(.8+ot.s*.6),h.updateMatrix(),z.setMatrixAt(Dt,h.matrix)}),z.instanceMatrix.needsUpdate=!0,qt.forEach((ot,Dt)=>{h.position.set(ot.x,ot.h,ot.z),h.rotation.set(Math.sin(I*1.1+ot.x)*.12,ot.r*6,Math.cos(I*.9+ot.z)*.12),h.scale.setScalar(.8+ot.s*.7),h.updateMatrix(),Zt.setMatrixAt(Dt,h.matrix)}),Zt.instanceMatrix.needsUpdate=!0)};et.updateMatrixWorld(!0);const Ct=[];return et.children.forEach(I=>{if(I.geometry.type==="CylinderGeometry"){const ot=I.getWorldPosition(new F);Ct.push({x:ot.x,z:ot.z,r:.15})}}),Ct.push({x:pe,z:W,r:.9}),{colliders:d,update:At,obstacles:Ct}}function vh(i,{heightTex:t,ext:e,grid:n,quality:s,sunDir:r,colors:a,level:o=.05,size:l=220,center:c=[0,0],maxDepth:u=100}){const h=jn.merge([Pt.fog,{uTime:{value:0},uHeight:{value:t},uExt:{value:e},uGrid:{value:n},uLevel:{value:o},uMaxDepth:{value:u},uShallow:{value:new wt(a.shallow)},uMid:{value:new wt(a.mid)},uDeep:{value:new wt(a.deep)},uSun:{value:r.clone().normalize()},uCaustic:{value:(s.mobile?.8:1)*a.caustic}}]);h.uHeight.value=t;const p=new Ne({uniforms:h,transparent:!0,depthWrite:!1,fog:!0,vertexShader:`
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
      }`}),d=l<50?8:s.mobile?40:64,v=new Jn(l,l,d,d);v.rotateX(-Math.PI/2);const M=new Jt(v,p);return M.position.set(c[0],o,c[1]),M.renderOrder=2,i.add(M),{mesh:M,update(m){h.uTime.value=m}}}function xh(i,t){const e=new Fa(Float32Array.from(i),t,t,Ua,$n);return e.magFilter=e.minFilter=ln,e.generateMipmaps=!1,e.needsUpdate=!0,e}function cs(i){const t=i.map(([h])=>h.index?h.toNonIndexed():h),e=t.reduce((h,p)=>h+p.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=new wt,a=new F;let o=0;t.forEach((h,p)=>{const d=i[p][1],v=h.attributes.position;for(let M=0;M<v.count;M++)a.fromBufferAttribute(v,M),d(a,r),n.set([a.x,a.y,a.z],(o+M)*3),s.set([r.r,r.g,r.b],(o+M)*3);o+=v.count});const l=new Re;l.setAttribute("position",new ze(n,3)),l.setAttribute("color",new ze(s,3)),l.computeVertexNormals();let c=0;const u=l.attributes.normal;return t.forEach((h,p)=>{const d=i[p][2],v=h.attributes.position.count;if(d)for(let M=0;M<v;M++)a.fromBufferAttribute(l.attributes.position,c+M).sub(d).normalize(),u.setXYZ(c+M,a.x,a.y,a.z);c+=v}),l}const bl=.7,wl=3.8;function gv(){const i=[],e=wl/8,n=new wt("#7a5434"),s=new wt("#a57a4e");for(let r=0;r<8;r++){const a=r/8,o=(r+1)/8,l=.24-a*.08,c=.24-o*.08,u=new Pe(c,l*1.12,e,7,1),h=u.attributes.position;for(let p=0;p<h.count;p++){const d=h.getY(p)+e/2+r*e,v=d/wl;h.setXYZ(p,h.getX(p)+bl*v*v,d,h.getZ(p))}i.push([u,(p,d)=>d.copy(n).lerp(s,p.y/e%1)])}return cs(i)}function vv(i){const n=[],s=[];for(let a=0;a<=12;a++){const o=a/12;s.push(new F(0,.35*o-1.25*o*o,o*2.7))}for(let a=0;a<12;a++){const o=a/12,l=s[a],c=s[a+1],u=.62*Math.sin(Math.PI*Math.min(1,o*1.1+.08))+.05;for(const h of[-1,1]){const p=new F(h*u,l.y-.08-u*.25,l.z+.32);n.push(l.x,l.y,l.z,c.x,c.y,c.z,p.x,p.y,p.z)}}const r=new Re;return r.setAttribute("position",new se(n,3)),r}function xv(){const i=[],t=new wt("#3f8a3a"),e=new wt("#9ad25a"),n=8;for(let s=0;s<n;s++){const r=vv();r.rotateX(-.15+s%2*.25),r.rotateY(s/n*Math.PI*2+s%2*.2),i.push([r,(a,o)=>{const l=Math.hypot(a.x,a.z);o.copy(t).lerp(e,Math.min(1,l/2.4))}])}for(let s=0;s<3;s++){const r=new li(.16,6,4);r.translate(Math.cos(s*2.1)*.18,-.2,Math.sin(s*2.1)*.18),i.push([r,(a,o)=>o.set("#6b4a2a")])}return cs(i)}function _h(i,t,e){const n=i.map(([s,r,a,o],l)=>{const c=new ki(o,2),u=c.attributes.position;for(let h=0;h<u.count;h++){const p=u.getX(h),d=u.getY(h),v=u.getZ(h),M=1+.07*Math.sin(p*7+l)*Math.sin(d*6)+.05*Math.sin(v*9+d*4);u.setXYZ(h,p*M,d*M*.92,v*M)}return c.translate(s,r,a),[c,(h,p)=>p.copy(e).lerp(t,Ie.smoothstep(h.y,r-o*.6,r+o*.9)),new F(s,r,a)]});return cs(n)}function _v(i){const t=[],e=new wt("#2f6a48"),n=new wt("#4a8a5a"),s=new wt("#ffffff");return[[1.5,1.5,.9],[1.15,1.35,1.8],[.8,1.2,2.6],[.45,.9,3.25]].forEach(([r,a,o])=>{const l=new wi(r,a,10,2),c=l.attributes.position;for(let u=0;u<c.count;u++)c.getY(u)<-a/2+.01&&c.setY(u,c.getY(u)+Math.sin(u*1.7)*.12);l.translate(0,o,0),t.push([l,(u,h)=>{const p=(u.y-o+a/2)/a;h.copy(e).lerp(n,p),i&&p>.12&&h.lerp(s,Math.min(1,(p-.12)*2.6))}])}),cs(t)}function Mv(){const i=[],t=new Pe(.12,.26,3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getY(n);e.setX(n,e.getX(n)+Math.sin(s*1.7)*.12)}return t.translate(0,1.5,0),i.push([t,(n,s)=>s.set(n.y<.4?"#1e1a18":"#3a302a")]),[[.4,1.9,.9,.7],[-.5,2.3,-.8,.6],[.2,2.7,.6,.5]].forEach(([n,s,r,a])=>{const o=new Pe(.03,.08,a,4);o.translate(0,a/2,0),o.rotateZ(r),o.translate(n*.3,s,0),i.push([o,(l,c)=>c.set("#2e2622")])}),cs(i)}function yv(i,t,e,n){const s=t.filter(U=>U.kind==="palm"),r=t.filter(U=>U.kind==="round"),a=t.filter(U=>U.kind==="bush"),o=t.filter(U=>U.kind==="pine"),l=t.filter(U=>U.kind==="dead"),c=new Fe({vertexColors:!0}),u=new Fe({vertexColors:!0,side:Ze}),h=new wt(n.trees.leaf[0]),p=new wt(n.trees.leaf[1]),d=new Pe(.16,.26,1.6,7);d.translate(0,.8,0);const v=cs([[d,(U,O)=>O.set("#7a5434")]]),M=_h([[0,2.2,0,1.15],[.8,1.9,.3,.8],[-.7,1.95,-.2,.85],[.1,2,-.85,.75],[-.2,2.9,.2,.8],[.35,1.8,.85,.7]],h,p),m=_h([[0,.45,0,.6],[.5,.35,.2,.45],[-.45,.38,-.15,.48],[.05,.7,.1,.42]],h,p),f=(U,O,k)=>{const Y=new an(U,O,Math.max(1,k));return Y.count=k,Y.castShadow=!0,Y.receiveShadow=!0,i.add(Y),Y},y=f(gv(),c,s.length),b=f(xv(),u,s.length),g=f(v,c,r.length),A=f(M,c,r.length),E=f(m,c,a.length),w=new Pe(.14,.22,1.2,6);w.translate(0,.6,0);const T=f(cs([[w,(U,O)=>O.set("#5a3e2a")]]),c,o.length),_=f(_v(n.id==="vinter"),c,o.length),x=f(Mv(),c,l.length),C=new Ce;s.forEach((U,O)=>{C.position.set(U.x,U.y-.1,U.z),C.rotation.set(0,U.phase,0),C.scale.setScalar(U.s),C.updateMatrix(),y.setMatrixAt(O,C.matrix)}),r.forEach((U,O)=>{C.position.set(U.x,U.y-.1,U.z),C.rotation.set(0,U.phase,0),C.scale.setScalar(U.s),C.updateMatrix(),g.setMatrixAt(O,C.matrix)}),o.forEach((U,O)=>{C.position.set(U.x,U.y-.1,U.z),C.rotation.set(0,U.phase,0),C.scale.setScalar(U.s),C.updateMatrix(),T.setMatrixAt(O,C.matrix)}),l.forEach((U,O)=>{C.position.set(U.x,U.y-.1,U.z),C.rotation.set(0,U.phase,(U.phase%1-.5)*.15),C.scale.setScalar(U.s),C.updateMatrix(),x.setMatrixAt(O,C.matrix)});const N=U=>{s.forEach((O,k)=>{const Y=Math.cos(O.phase),B=Math.sin(O.phase);C.position.set(O.x+bl*Y*O.s,O.y-.1+wl*O.s,O.z-bl*B*O.s),C.rotation.set(Math.sin(U*1.2+O.phase)*.07,O.phase+Math.sin(U*.7+O.phase)*.05,Math.cos(U*1+O.phase)*.07),C.scale.setScalar(O.s),C.updateMatrix(),b.setMatrixAt(k,C.matrix)}),b.instanceMatrix.needsUpdate=!0,r.forEach((O,k)=>{C.position.set(O.x,O.y-.1,O.z),C.rotation.set(Math.sin(U*1.1+O.phase)*.025,O.phase,Math.cos(U*.9+O.phase)*.025),C.scale.setScalar(O.s),C.updateMatrix(),A.setMatrixAt(k,C.matrix)}),A.instanceMatrix.needsUpdate=!0,a.forEach((O,k)=>{const Y=1+Math.sin(U*1.6+O.phase)*.035;C.position.set(O.x,O.y-.12,O.z),C.rotation.set(0,O.phase,0),C.scale.set(O.s*Y,O.s/Y,O.s*Y),C.updateMatrix(),E.setMatrixAt(k,C.matrix)}),E.instanceMatrix.needsUpdate=!0,o.forEach((O,k)=>{C.position.set(O.x,O.y-.1,O.z),C.rotation.set(Math.sin(U*.9+O.phase)*.02,O.phase,Math.cos(U*.8+O.phase)*.02),C.scale.setScalar(O.s),C.updateMatrix(),_.setMatrixAt(k,C.matrix)}),_.instanceMatrix.needsUpdate=!0};return N(0),{colliders:[...s.map(U=>({x:U.x,z:U.z,r:.35*U.s})),...r.map(U=>({x:U.x,z:U.z,r:.4*U.s})),...a.map(U=>({x:U.x,z:U.z,r:.7*U.s})),...o.map(U=>({x:U.x,z:U.z,r:.4*U.s})),...l.map(U=>({x:U.x,z:U.z,r:.3*U.s}))],update:N}}function Eo(i,t=5){const e=[],n=[],s=new wt,r=new wt;for(let o=0;o<t;o++){const l=i()*Math.PI*2,c=i()*.16,u=.28+i()*.3,h=.04+i()*.03,p=Math.cos(l)*c,d=Math.sin(l)*c,v=(i()-.5)*.25,M=i()*Math.PI,m=Math.cos(M)*h,f=Math.sin(M)*h;e.push(p-m,0,d-f,p+m,0,d+f,p+Math.cos(l)*v,u,d+Math.sin(l)*v),s.setRGB(.72,.72,.72),r.setRGB(1.2,1.22,1.12),n.push(s.r,s.g,s.b,s.r,s.g,s.b,r.r,r.g,r.b)}const a=new Re;return a.setAttribute("position",new se(e,3)),a.setAttribute("color",new se(n,3)),a.setAttribute("normal",new se(new Array(e.length/3).fill(0).flatMap(()=>[0,1,0]),3)),a}function Sv(){const i=[];for(let a=0;a<3;a++){const o=new li(.07,6,3);o.scale(1,.25,1.15);const l=a*2.094;o.translate(Math.cos(l)*.065,.05,Math.sin(l)*.065),i.push(o.toNonIndexed())}const t=i.reduce((a,o)=>a+o.attributes.position.count,0),e=new Float32Array(t*3),n=new Float32Array(t*3);let s=0;for(const a of i)e.set(a.attributes.position.array,s*3),n.set(a.attributes.normal.array,s*3),s+=a.attributes.position.count;const r=new Re;return r.setAttribute("position",new ze(e,3)),r.setAttribute("normal",new ze(n,3)),r}function bv(i,t,e,n,s){const{heightAt:r,pathDist:a,plinths:o}=t,l=t.lighthouse.pos,c={uTime:{value:0}},h=(C=>(C.onBeforeCompile=N=>{N.uniforms.uTime=c.uTime,N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
            vec2 ip = instanceMatrix[3].xz;
          #else
            vec2 ip = vec2(0.0);
          #endif
          float sway = sin(uTime * 1.8 + ip.x * 0.35 + ip.y * 0.27) * 0.6 + sin(uTime * 3.1 + ip.x * 1.3) * 0.25;
          transformed.x += sway * transformed.y * 0.22;
          transformed.z += cos(uTime * 1.5 + ip.y * 0.4) * transformed.y * 0.12;`),N.fragmentShader=N.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
  normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},C))(new Fe({vertexColors:!0,side:Ze})),p=new Fe({color:"#ffffff"}),d=[Eo(s,7),Eo(s,8),Eo(s,6)],v=Sv(),M={tak:{grass:["#3f8a3a","#6fbf4a"],density:1,clover:.22,cloverCol:["#3a8a3a","#5aa84a"]},vinter:{grass:["#9a9a7a","#c8c4a0"],density:.18,clover:0,cloverCol:["#fff","#fff"]},vulkan:{grass:["#4a5a30","#6a7a3a"],density:.35,clover:0,cloverCol:["#fff","#fff"]}}[n.id],m=(e.mobile?.45:1)*M.density,f=13,y=8,b=Math.round(720*m),g=[],A=new Ce,E=new wt,w=new wt(M.grass[0]),T=new wt(M.grass[1]),_=(C,N,z)=>{if(z<.72)return!1;const U=a(C,N);if(U<1||U<1.7&&s()<.6||Math.hypot(C-l.x,N-l.z)<4.3||n.volcano&&Math.hypot(C-n.volcano.x,N-n.volcano.z)<n.volcano.r*.7)return!1;for(const O of o)if((O.x-C)**2+(O.z-N)**2<2.6)return!1;return!t.extrasBlock||!t.extrasBlock(C,N)};for(let C=0;C<y;C++)for(let N=0;N<y;N++){const z=-y*f/2+C*f,U=-y*f/2+N*f;for(const[O,k]of[[0,b*.4],[1,b*.35],[2,b*.25]]){const Y=[];for(let K=0;K<k*3&&Y.length<k;K++){const at=z+s()*f,ct=U+s()*f,vt=r(at,ct);_(at,ct,vt)&&Y.push([at,ct,vt])}if(!Y.length)continue;const B=new an(d[O],h,Y.length);B.userData.tier=O,Y.forEach(([K,at,ct],vt)=>{A.position.set(K,ct-.04,at),A.rotation.set(0,s()*6.28,0),A.scale.setScalar(.8+s()*.7),A.updateMatrix(),B.setMatrixAt(vt,A.matrix),B.setColorAt(vt,E.copy(w).lerp(T,s()))}),B.receiveShadow=!0,B.computeBoundingSphere(),i.add(B),g.push(B)}if(M.clover>0){const O=[],k=z+s()*f,Y=U+s()*f;for(let B=0;B<b*M.clover*3&&O.length<b*M.clover;B++){const K=k+(s()-.5)*6,at=Y+(s()-.5)*6,ct=r(K,at);_(K,at,ct)&&O.push([K,at,ct])}if(O.length){const B=new an(v,p,O.length),K=new wt(M.cloverCol[0]),at=new wt(M.cloverCol[1]);O.forEach(([ct,vt,Xt],et)=>{A.position.set(ct,Xt-.02,vt),A.rotation.set(0,s()*6.28,0),A.scale.setScalar(.8+s()*.8),A.updateMatrix(),B.setMatrixAt(et,A.matrix),B.setColorAt(et,E.copy(K).lerp(at,s()))}),B.receiveShadow=!0,B.userData.tier=1,B.computeBoundingSphere(),i.add(B),g.push(B)}}}return{update(C){c.uTime.value=C},setLevel:C=>g.forEach(N=>{N.visible=C==="high"||N.userData.tier===0,N.receiveShadow=C==="high"}),count:g.reduce((C,N)=>C+N.count,0)}}function Mh(i,{arms:t=4,rStart:e=56,rEnd:n=4.2,turns:s=.7,a0:r=.35,steps:a=16}={}){const o=[];for(let l=0;l<t;l++){const c=r+l/t*Math.PI*2,u=[];for(let h=0;h<=a;h++){const p=h/a,d=e*(1-p)+n*p,v=c+p*s*Math.PI*2;u.push([i[0]+Math.cos(v)*d,i[1]+Math.sin(v)*d])}o.push(u)}return o}const wv={xc:i=>3*Math.sin(i*.06),w:4.2,bridgeZ:-20,top:50,wall:27},Ev=[[[-15,56],[-17,40],[-13,24],[-17,8],[-14,-6],[-12,-18],[-11,-26],[-10,-33],[-10,-38.4]],[[17,56],[19,40],[15,24],[18,8],[15,-6],[12,-16],[5,-20],[-2,-20.5],[-8,-22],[-11,-26],[-10,-33],[-10,-38.4]]],Tv=[90,210,330].map(i=>i*Math.PI/180),ba=11,Av=()=>{const i=[];for(let e=0;e<=48;e++){const n=e/48*Math.PI*2;i.push([Math.cos(n)*ba,Math.sin(n)*ba])}const t=Tv.map(e=>[ba,20,30,40,50].map((n,s)=>{const r=e+Math.sin(n*.25+s)*.04;return[Math.cos(r)*n,Math.sin(r)*n]}));return[i,...t]},Qs=[{id:"tak",name:"Tåkeøya",blurb:"Palmer, turkis lagune og en joint som har glødd i hundre år.",seed:1,radius:46,edgeAmp:[4.5,2.6,1.5],lighthouse:[0,0],paths:Mh([0,0]),plateausAuto:[{r:6.5,h:4.2},{r:5.5,h:3.4},{r:5,h:3}],waterfall:{poolR:1.9,basinR:2.7},palette:{sand:"#d6bf8c",grass:"#5a9e44",grass2:"#3c8236",path:"#9c8462",deep:"#cdb987",pathMix:.35},water:{shallow:"#8fe6d2",mid:"#3cc8c4",deep:"#1a8ea4",caustic:1},sky:{fog:"#b9d4dc",hemiSky:"#eaf4ff",hemiGround:"#4a5a44",hemi:1.1,sun:"#fff1d8",sunI:2.5,exposure:1,sunDir:[14,30,10],grade:{tint:[1,1,.99],lift:[0,.006,.02],sat:1.06,vignette:.22}},skyDusk:{fog:"#d9a48e",hemiSky:"#ffd6b0",hemiGround:"#5a4a72",hemi:1.35,sun:"#ffb27a",sunI:2.7,exposure:1.05,sunDir:[24,17,4],grade:{tint:[1.07,1,.9],lift:[.025,.008,.03],sat:1.1,vignette:.3}},trees:{beach:{palm:.75,bush:.25},inland:{palm:.25,round:.45,bush:.3},leaf:["#a8d85a","#2f7a3a"]},rock:["#a9a49c","#7f9f52"],life:["fireflies","butterflies","birds","leaves"],balance:{hp:1.3,count:1.25,speed:1,air:.4,airSpeed:.85,types:{clerk:{hp:.85}},extra:null}},{id:"vinter",name:"Vinterfjorden",blurb:"Snø, nordlys og isflak. Forbudsdirektoratet har kledd seg varmt.",seed:2,radius:47,edgeAmp:[3.5,3.2,2.2],lighthouse:[-10,-42.5],paths:Ev,shape:"fjord",fjord:wv,nes:{x:-10,z0:-20,z1:-45,r:6.5},dockTheta:-1.2,icy:!0,palette:{sand:"#b9bec4",grass:"#f1f5fa",grass2:"#dfe8f2",path:"#c2ccd8",deep:"#9aa8b4"},water:{shallow:"#b8e2ee",mid:"#5a9cc0",deep:"#1d3f66",caustic:.55},sky:{fog:"#2a3550",hemiSky:"#9fb8ff",hemiGround:"#1c2440",hemi:1.1,sun:"#b8ccff",sunI:1.5,exposure:1.15,sunDir:[-12,26,8],grade:{tint:[.96,1,1.06],lift:[0,.01,.03],sat:1.05,vignette:.32}},trees:{beach:{pine:.6,bush:.4},inland:{pine:.8,bush:.2},leaf:["#e8f0f8","#2c5a44"]},rock:["#8a929c","#eef4fa"],life:["snow","aurora","icefloes"],balance:{hp:1.5,count:1.2,speed:.97,extra:{type:"tank",n:1,gap:4,path:"both",from:3}}},{id:"vulkan",name:"Vulkanøya",blurb:"Svart sand, lava-elver og glødende stein. Her trenger ingen fyrstikker.",seed:3,radius:48,edgeAmp:[3.5,2.2,1.6],lighthouse:[0,0],dockTheta:.5,paths:Mh([0,0],{arms:3,rStart:56,rEnd:4.4,turns:.75,a0:Math.PI/6,steps:24}),lava:Av(),moat:ba,eruption:{every:60,closed:10},fog:[38,100],palette:{sand:"#3a3533",grass:"#5a6a3c",grass2:"#3f4c2e",path:"#3e3b3a",deep:"#2c2826",pathMix:.15},water:{shallow:"#5a8f90",mid:"#2c5a63",deep:"#122b35",caustic:.4},sky:{fog:"#4a2c2a",hemiSky:"#ff9a6a",hemiGround:"#2a1a1a",hemi:1.15,sun:"#ff7a40",sunI:2.3,exposure:1.1,sunDir:[20,20,6],grade:{tint:[1.05,.98,.94],lift:[.02,0,0],sat:1.08,vignette:.32}},trees:{beach:{dead:.5,bush:.5},inland:{dead:.45,palm:.2,bush:.35},leaf:["#7a9a4a","#2f4a2a"]},rock:["#2e2a2a","#5a3a2a"],life:["ash","embers"],balance:{hp:1.25,count:1.1,speed:1,air:.6,airSpeed:.85,extra:{type:"gull",n:1,gap:1.4,from:3}}}];function Cv(i){const[t,e,n]=i.edgeAmp,s=i.seed;return r=>i.radius+t*Math.sin(3*r+.4*s)+e*Math.sin(7*r+1.3*s)+n*Math.sin(11*r+s)}function Rv(i,t){return t.map((e,n)=>{const s=e.map(a=>({...a})),r=i.balance.extra;return r&&n+1>=r.from&&s.push({...r,n:r.n+Math.floor((n+1-r.from)/2),at:5}),s})}function Ar(){try{return Math.max(1,Math.min(Qs.length,Number(localStorage.getItem("glod-unlocked"))||1))}catch{return 1}}function Pv(i){try{i+2>Ar()&&localStorage.setItem("glod-unlocked",String(Math.min(Qs.length,i+2)))}catch{}}function aa(i,t,{color:e,size:n,speed:s,drift:r,additive:a,area:o=46,top:l=22}){const c=new Float32Array(t*3),u=new Float32Array(t);for(let f=0;f<t;f++)c[f*3]=(Math.random()-.5)*o*2,c[f*3+1]=Math.random()*l,c[f*3+2]=(Math.random()-.5)*o*2,u[f]=Math.random()*6.28;const h=new Re;h.setAttribute("position",new ze(c,3));const p=document.createElement("canvas");p.width=p.height=32;const d=p.getContext("2d"),v=d.createRadialGradient(16,16,0,16,16,16);v.addColorStop(0,"rgba(255,255,255,1)"),v.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=v,d.fillRect(0,0,32,32);const M=new za({color:e,size:n,map:new Fi(p),transparent:!0,depthWrite:!1,blending:a?ri:Oi,opacity:a?1:.85}),m=new jl(h,M);return m.frustumCulled=!1,i.add(m),(f,y,b)=>{for(let g=0;g<t;g++){let A=c[g*3+1]-s*f*(.7+u[g]%1*.6);c[g*3]+=Math.sin(b*.7+u[g])*r*f,(s<0?A>l:A<0)&&(A=s<0?0:l,c[g*3]=y.x+(Math.random()-.5)*o*2,c[g*3+2]=y.z+(Math.random()-.5)*o*2),c[g*3+1]=A}h.attributes.position.needsUpdate=!0}}function Dv(i,t,e,n,s=160){const r=new Kl(i.map(([h,p])=>new F(h,0,p))),a=r.getLength(),o=[],l=[],c=[];for(let h=0;h<=s;h++){const p=h/s,d=r.getPointAt(p),v=r.getTangentAt(p),M=-v.z,m=v.x,f=t*(.75+.25*Math.sin(p*9));for(const y of[-1,1]){const b=d.x+M*f*y,g=d.z+m*f*y;o.push(b,e(b,g)+n,g),l.push(p*a,(y+1)/2)}if(h<s){const y=h*2;c.push(y,y+1,y+2,y+1,y+3,y+2)}}const u=new Re;return u.setAttribute("position",new se(o,3)),u.setAttribute("uv",new se(l,2)),u.setIndex(c),u.computeVertexNormals(),{geo:u,curve:r,len:a}}function Lv(i,t,e,n){var M;const{heightAt:s}=t,r=[],a=[],o=[],l=[],c=[],u=e.mobile?.5:1,h=new Set(n.life);if(h.has("aurora")){const m=new Ne({transparent:!0,depthWrite:!1,blending:ri,side:Ze,fog:!1,uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const[f,y,b]of[[0,-66,0],[-62,-20,Math.PI/2.4],[62,-24,-Math.PI/2.4]]){const g=new Jt(new Jn(150,26,96,1),m);g.position.set(f,20,y),g.rotation.y=b,i.add(g)}a.push((f,y,b)=>m.uniforms.uTime.value=b)}if(h.has("snow")&&a.push(aa(i,Math.round(900*u),{color:"#ffffff",size:.28,speed:2.2,drift:.8})),h.has("ash")&&a.push(aa(i,Math.round(500*u),{color:"#6a625e",size:.22,speed:1.2,drift:.6})),h.has("embers")&&a.push(aa(i,Math.round(160*u),{color:"#ff8a3a",size:.25,speed:-1.6,drift:1.2,additive:!0,top:10})),h.has("icefloes")){const m=[];for(let A=0;A<6e3&&m.length<70*u;A++){const E=(Math.random()-.5)*120,w=(Math.random()-.5)*120,T=.05-s(E,w);T>.15&&T<1.4&&m.every(_=>Math.hypot(_.x-E,_.z-w)>2.2)&&m.push({x:E,z:w,s:.6+Math.random()*1.1,r:Math.random()*6})}const f=new Pe(1,.9,.18,7),y=f.attributes.position;for(let A=0;A<y.count;A++){const E=Math.atan2(y.getZ(A),y.getX(A)),w=.75+.35*Math.abs(Math.sin(E*2.3+A));y.setX(A,y.getX(A)*w),y.setZ(A,y.getZ(A)*w)}f.computeVertexNormals();const b=new an(f,new Fe({color:"#eaf6ff"}),Math.max(1,m.length));b.count=m.length,b.receiveShadow=!0,i.add(b);const g=new Ce;a.push((A,E,w)=>{m.forEach((T,_)=>{g.position.set(T.x+Math.sin(w*.1+T.r)*.4,.08+Math.sin(w*1.1+T.r)*.03,T.z),g.rotation.set(Math.sin(w*.9+T.r)*.03,T.r+w*.02,Math.cos(w*.8+T.r)*.03),g.scale.set(T.s,1,T.s),g.updateMatrix(),b.setMatrixAt(_,g.matrix)}),b.instanceMatrix.needsUpdate=!0})}if(n.lava){const m=new Ne({uniforms:{uTime:{value:0}},vertexShader:`
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
        }`});for(const g of n.lava){const A=Dv(g,1.25,s,.07);i.add(new Jt(A.geo,m));const E=[];let w=!1;for(let T=0;T<=1;T+=1.4/A.len){const _=A.curve.getPointAt(Math.min(1,T));if(t.pathDist(_.x,_.z)<2.4){w||c.push({x:_.x,z:_.z,tan:A.curve.getTangentAt(Math.min(1,T))}),w=!0;continue}w=!1,o.push({x:_.x,z:_.z,r:1.4})}for(const T of[.25,.7]){const _=A.curve.getPointAt(T),x=new Tr("#ff6a2a",14,12,1.6);x.position.set(_.x,s(_.x,_.z)+1.2,_.z),i.add(x),E.push(x)}a.push((T,_,x)=>E.forEach((C,N)=>C.intensity=12+3*Math.sin(x*2.3+N)))}a.push((g,A,E)=>m.uniforms.uTime.value=E);const f=new En(3.4,.35,4.2),y=new Fe({color:((M=n.rock)==null?void 0:M[0])??"#555"}),b=new Pe(2.4,2.4,.1,18);for(const g of c){const A=s(g.x,g.z)+.12,E=new Jt(f,y);E.position.set(g.x,A,g.z),E.rotation.y=-Math.atan2(g.tan.z,g.tan.x),E.castShadow=E.receiveShadow=!0,i.add(E);const w=new Jt(b,new be({color:new wt("#ff5a1a").multiplyScalar(2.2),transparent:!0,opacity:0}));w.position.set(g.x,A+.25,g.z),w.visible=!1,i.add(w);const T=new Tr("#ff6a2a",0,14,1.6);T.position.set(g.x,A+1.6,g.z),i.add(T);let _=!1;l.push({x:g.x,z:g.z,get closed(){return _},setClosed(x){_=x,w.visible=x}}),a.push((x,C,N)=>{const z=_?1:0;w.material.opacity+=(z*.9-w.material.opacity)*Math.min(1,x*3),!_&&w.material.opacity<.02&&(w.visible=!1),T.intensity=w.material.opacity*(22+6*Math.sin(N*9))})}}if(n.volcano){const m=n.volcano;o.push({x:m.x,z:m.z,r:m.r*.55});const f=new Jt(new qs(m.r*.22,20),new be({color:new wt("#ff5a1a").multiplyScalar(2.4)}));f.rotation.x=-Math.PI/2,f.position.set(m.x,s(m.x,m.z)+.2,m.z),i.add(f);const y=new Ba(.35,0),b=[];for(let E=0;E<3e3&&b.length<50*u;E++){const w=(Math.random()-.5)*96,T=(Math.random()-.5)*96,_=s(w,T);_>.4&&t.pathDist(w,T)>2.2&&b.push({x:w,z:T,h:_,s:.5+Math.random()})}const g=new an(y,new be({color:new wt("#ff7a2a").multiplyScalar(1.8)}),Math.max(1,b.length));g.count=b.length;const A=new Ce;b.forEach((E,w)=>{A.position.set(E.x,E.h,E.z),A.rotation.set(E.s,E.s*3,0),A.scale.set(E.s,E.s*.5,E.s),A.updateMatrix(),g.setMatrixAt(w,A.matrix)}),i.add(g)}if(n.waterfall&&n.waterfall._lvl!==void 0){const m=n.waterfall,f=m.basin[0]-m.lip[0],y=m.basin[1]-m.lip[1],b=Math.hypot(f,y),g=f/b,A=y/b,E=m._lvl-.1,w=14,T=1.25,_=[],x=[],C=[];for(let B=0;B<=w;B++){const K=B/w,at=.35+1.5*K*K,ct=E-(E-.06)*(K*K*.6+K*.4);for(const vt of[-1,1])_.push(m.lip[0]+g*at-A*T*vt*(.85+K*.3),ct,m.lip[1]+A*at+g*T*vt*(.85+K*.3)),x.push((vt+1)/2,K);if(B<w){const vt=B*2;C.push(vt,vt+1,vt+2,vt+1,vt+3,vt+2)}}const N=new Re;N.setAttribute("position",new se(_,3)),N.setAttribute("uv",new se(x,2)),N.setIndex(C);const z=new Ne({transparent:!0,depthWrite:!1,side:Ze,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(float x) { return fract(sin(x * 127.1) * 43758.5); }
        void main() {
          float col = floor(vUv.x * 18.0);
          float streak = fract(vUv.y * (1.6 + h(col) * 1.2) - uTime * (1.4 + h(col + 3.0) * 0.8));
          float s = smoothstep(0.0, 0.25, streak) * (1.0 - smoothstep(0.55, 1.0, streak));
          float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
          vec3 c = mix(vec3(0.45, 0.85, 0.88), vec3(1.0), s * 0.8 + vUv.y * 0.3);
          gl_FragColor = vec4(c, (0.55 + 0.4 * s) * edge);
        }`});i.add(new Jt(N,z));const U=new Jt(new qs(1.4,20),new be({color:"#ffffff",transparent:!0,opacity:.7,depthWrite:!1}));U.rotation.x=-Math.PI/2;const O=m.lip[0]+g*1.9,k=m.lip[1]+A*1.9;U.position.set(O,.1,k),i.add(U);const Y=aa(i,Math.round(60*u),{color:"#ffffff",size:.35,speed:-.9,drift:.6,area:1.4,top:2.2});a.push((B,K,at)=>{z.uniforms.uTime.value=at,U.scale.setScalar(1+Math.sin(at*5)*.08),U.material.opacity=.55+.15*Math.sin(at*7),Y(B,{x:O,z:k},at)}),o.push({x:O,z:k,r:.9})}const p=(m,f)=>o.some(y=>(y.x-m)**2+(y.z-f)**2<y.r*y.r);let d=0;return{colliders:r,update:(m,f=t.lighthouse.pos)=>{const y=Math.min(.05,Math.max(0,m-d));d=m;for(const b of a)b(y,f,m)},blocks:p,blockers:o,bridges:l}}const Dn=20;function ei(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Uv(i){const t=new Kl(i.map(([s,r])=>new F(s,0,r)),!1,"catmullrom",.5),e=t.getLength(),n=t.getSpacedPoints(400);return{curve:t,length:e,samples:n}}function Iv(i,t,e,n){const s=3+n%2,r=[],a=[],o=[],l=new wt(t),c=l.clone().multiplyScalar(.72),u=new wt(e),h=new wt;let p=0,d=0,v=0;for(let m=0;m<s;m++){const f=1.25-m*.22+i()*.15,y=.45+i()*.25,b=new ki(1,2).toNonIndexed(),g=b.attributes.position,A=b.attributes.uv;for(let E=0;E<g.count;E++){let w=g.getX(E),T=g.getY(E),_=g.getZ(E);T=Math.sign(T)*Math.pow(Math.abs(T),.55);const x=1+.12*Math.sin(w*5+m)*Math.sin(_*4+n)+.06*Math.sin(T*9);w*=f*x,_*=f*.85*x,T=T*y*.5;const C=Ie.smoothstep(T/(y*.5),.45,.85);h.copy(c).lerp(l,Ie.smoothstep(T/(y*.5),-.9,.3)).lerp(u,C*(m===s-1?1:.6)),r.push(w+d,T+p+y*.5,_+v),a.push(h.r,h.g,h.b),o.push(A.getX(E)*2,A.getY(E)*2)}p+=y*.82,d+=(i()-.5)*.4,v+=(i()-.5)*.35}const M=new Re;return M.setAttribute("position",new se(r,3)),M.setAttribute("color",new se(a,3)),M.setAttribute("uv",new se(o,2)),M.computeVertexNormals(),M}function Nv(i,t,e){const n=Cv(e),s=new F(e.lighthouse[0],0,e.lighthouse[1]),r=e.paths.map(Uv),a=r.flatMap(L=>L.samples),o=(L,D)=>{let H=1/0;for(let Z=0;Z<a.length;Z+=3){const lt=a[Z],mt=(lt.x-L)**2+(lt.z-D)**2;mt<H&&(H=mt)}return Math.sqrt(H)};if(e.plateausAuto&&!e.plateaus){const L=ei(500+e.seed),D=[];for(const H of e.plateausAuto){let Z=null,lt=-1;for(let mt=0;mt<500;mt++){const _t=L()*Math.PI*2,ft=12+L()*24,Rt=Math.cos(_t)*ft,yt=Math.sin(_t)*ft,me=o(Rt,yt);if(me<H.r+3.5||Math.hypot(Rt-s.x,yt-s.z)<H.r+9||D.some(xe=>Math.hypot(xe.x-Rt,xe.z-yt)<xe.r+H.r+5))continue;const jt=Math.min(me-H.r,9)+L()*.5;jt>lt&&(lt=jt,Z={x:Rt,z:yt,...H})}Z&&D.push(Z)}if(e.plateaus=D,e.waterfall&&D[0]){const H=D[0],Z=e.waterfall;let lt=0,mt=-1;for(let Rt=0;Rt<16;Rt++){const yt=Rt/16*Math.PI*2,me=H.x+Math.cos(yt)*(H.r+3.2),jt=H.z+Math.sin(yt)*(H.r+3.2),xe=o(me,jt);xe>mt&&(mt=xe,lt=yt)}const _t=Math.cos(lt),ft=Math.sin(lt);Z.pool=[H.x+_t*(H.r-2.4),H.z+ft*(H.r-2.4)],Z.lip=[H.x+_t*(H.r-.3),H.z+ft*(H.r-.3)],Z.basin=[H.x+_t*(H.r+3),H.z+ft*(H.r+3)]}}const l=e.fjord,c=e.nes,u=(L,D)=>{if(e.shape==="fjord"){const H=D+30+2.2*Math.sin(L*.21)+1.2*Math.sin(L*.53+1),Z=Ie.clamp(D,c.z1,c.z0),lt=c.r-Math.hypot(L-c.x,D-Z)+(D<c.z1?0:.6*Math.sin(D*.7));return Math.max(H,lt)}return n(Math.atan2(D,L))-Math.hypot(L,D)},h=(L,D,H=!1)=>{const Z=Ie.smoothstep(u(L,D),-3,7),lt=.9+.7*Math.sin(L*.17+1)*Math.cos(D*.21)+.35*Math.sin(L*.5+D*.4)+.3*Math.sin(L*.31-D*.23+2.1)+.18*Math.cos(L*.73+D*.61),mt=2.4*Math.exp(-((L-s.x-2)**2+(D-s.z+1)**2)/60);let _t=-2.2+Z*(2.2+lt+mt);if(Z>.85&&_t<.35&&(_t=Math.max(-.42,.35-(.35-_t)*3.2)),l){const ft=Math.max(Ie.smoothstep(Math.abs(L),l.wall-3,l.wall+6),Ie.smoothstep(D,l.top+6,l.top+14));_t+=ft*(7+1.5*Math.sin(D*.13+L*.05));const Rt=Math.abs(L-l.xc(D)),yt=1-Ie.smoothstep(D,l.top-6,l.top+2);Rt<l.w+1.5&&yt>0&&(_t=Math.min(_t,Ie.lerp(_t,-1.6,yt*(1-Ie.smoothstep(Rt,l.w-.8,l.w+1.5)))))}for(const ft of e.plateaus||[]){const Rt=Math.hypot(L-ft.x,D-ft.z),yt=Math.atan2(D-ft.z,L-ft.x),me=ft.r+Math.sin(yt*5+ft.x)*.8+Math.sin(yt*11)*.3;_t+=ft.h*Ie.smoothstep(me-Rt,0,1.3)}if(e.waterfall&&!H){const ft=e.waterfall,Rt=Math.hypot(L-ft.pool[0],D-ft.pool[1]);Rt<ft.poolR+.6&&(ft._lvl??(ft._lvl=h(ft.pool[0],ft.pool[1],!0)-.12),_t=Math.min(_t,ft._lvl-.48*Math.sqrt(Math.max(0,1-Rt/(ft.poolR+.6)))));const yt=Ie.clamp(((L-ft.pool[0])*(ft.lip[0]-ft.pool[0])+(D-ft.pool[1])*(ft.lip[1]-ft.pool[1]))/((ft.lip[0]-ft.pool[0])**2+(ft.lip[1]-ft.pool[1])**2),0,1),me=ft.pool[0]+(ft.lip[0]-ft.pool[0])*yt,jt=ft.pool[1]+(ft.lip[1]-ft.pool[1])*yt;Math.hypot(L-me,D-jt)<.75&&ft._lvl!==void 0&&(_t=Math.min(_t,ft._lvl-.25));const xe=Math.hypot(L-ft.basin[0],D-ft.basin[1]);xe<ft.basinR&&(_t=Math.min(_t,Math.max(-.42,.05-.47*Math.sqrt(1-xe/ft.basinR))))}if(e.volcano){const ft=e.volcano,Rt=Math.hypot(L-ft.x,D-ft.z);_t+=ft.h*Math.max(0,1-Rt/ft.r)**1.4-ft.h*.5*Math.max(0,1-Rt/(ft.r*.25))}return _t},p=68,d=t.mobile?160:176,v=new Float32Array((d+1)*(d+1)),M=new Float32Array((d+1)*(d+1));for(let L=0;L<=d;L++)for(let D=0;D<=d;D++){const H=-p+D/d*p*2,Z=-p+L/d*p*2,lt=o(H,Z);M[L*(d+1)+D]=lt;let mt=h(H,Z);const _t=Ie.smoothstep(lt,1.4,3.2),ft=Math.max(h(H,Z)*.6+.3,.45);mt=Ie.lerp(Math.min(mt,ft+.1),mt,_t),l&&Math.abs(Z-l.bridgeZ)<4&&Math.abs(H-l.xc(Z))<l.w+2&&lt<2.2&&(mt=Math.max(mt,.5)),v[L*(d+1)+D]=mt}const m=(L,D,H)=>{const Z=Ie.clamp((D+p)/(p*2)*d,0,d-.001),lt=Ie.clamp((H+p)/(p*2)*d,0,d-.001),mt=Math.floor(Z),_t=Math.floor(lt),ft=Z-mt,Rt=lt-_t,yt=L[_t*(d+1)+mt],me=L[_t*(d+1)+mt+1],jt=L[(_t+1)*(d+1)+mt],xe=L[(_t+1)*(d+1)+mt+1];return(yt*(1-ft)+me*ft)*(1-Rt)+(jt*(1-ft)+xe*ft)*Rt},f=(L,D)=>m(v,L,D),y=(L,D)=>m(M,L,D),b=(L,D)=>f(L,D)>.35,g=.5,A=(L,D)=>Math.max(Math.abs(f(L+.4,D)-f(L-.4,D)),Math.abs(f(L,D+.4)-f(L,D-.4)))/.8,E=(L,D)=>!!l&&Math.abs(D-l.bridgeZ)<4&&Math.abs(L-l.xc(D))<l.w+1.5&&y(L,D)<2.6,w=new wt("#cfeaff"),T=(L,D)=>f(L,D)>.05-g&&A(L,D)<1.05,_=t.mobile?170:256,x=new Jn(p*2,p*2,_,_);x.rotateX(-Math.PI/2);const C=x.attributes.position,N=new Float32Array(C.count*3),z=e.palette,U=new wt(e.rock[0]).multiplyScalar(.7),O=new wt(e.rock[0]).multiplyScalar(1.08),k=new wt,Y=new wt(z.sand),B=new wt(z.grass),K=new wt(z.grass2),at=new wt(z.path),ct=new wt(z.deep),vt=new wt,Xt=ei(7);for(let L=0;L<C.count;L++){const D=C.getX(L),H=C.getZ(L),Z=f(D,H);C.setY(L,Z);const lt=y(D,H),mt=vt.copy(B).lerp(K,Ie.clamp((Z-1)*.6+Xt()*.3,0,1)).clone();vt.copy(ct).lerp(Y,Ie.smoothstep(Z,0,.3)).lerp(mt,Ie.smoothstep(Z,.62,.95));const _t=.5+.5*Math.sin(D*1.7+H*.9)*Math.cos(H*1.3-D*.6);lt<2.1&&Z>.15&&vt.lerp(at,Ie.smoothstep(1.9-lt+(_t-.5)*(z.pathMix??.3)*2.4,0,.7)),l&&E(D,H)&&vt.lerp(w,.85);const ft=A(D,H);if(ft>.75){const Rt=.5+.5*Math.sin(Z*7.5+Math.sin(D*.7+H*.5)*1.5);k.copy(U).lerp(O,Rt),vt.lerp(k,Ie.smoothstep(ft,.75,1.3))}vt.offsetHSL(0,0,(Xt()-.5)*.04),N.set([vt.r,vt.g,vt.b],L*3)}x.setAttribute("color",new ze(N,3)),x.computeVertexNormals();const et=new Fe({vertexColors:!0});et.onBeforeCompile=L=>{L.vertexShader=L.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),L.fragmentShader=L.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTW;`).replace("#include <color_fragment>",`#include <color_fragment>
        float sandMask = 1.0 - smoothstep(0.55, 0.85, vTW.y);
        float rip = sin(vTW.x * 2.3 + sin(vTW.z * 0.5) * 2.2 + vTW.z * 0.8);
        diffuseColor.rgb *= 1.0 - 0.045 * rip * sandMask;
        // Malt overflate: myk to-oktavs støy i lyshet og litt i fargetone
        vec2 q = vTW.xz;
        float n1 = sin(q.x * 0.9 + sin(q.y * 0.7) * 1.7) * sin(q.y * 1.1 + sin(q.x * 0.5) * 1.3);
        float n2 = sin(q.x * 3.7 + q.y * 2.3) * sin(q.y * 3.1 - q.x * 1.9);
        diffuseColor.rgb *= 0.93 + 0.07 * n1 + 0.035 * n2;
        diffuseColor.g *= 1.0 + 0.025 * n1;`)};const ht=new Jt(x,et);ht.receiveShadow=!0,i.add(ht);const xt=[],dt=(L,D)=>Math.hypot(L-s.x,D-s.z)>6;for(const[L,D]of r.entries()){let H=L%2===0?1:-1,Z=0;for(let lt=.16;lt<.95&&Z<6;lt+=.055){const mt=D.curve.getPointAt(lt),_t=D.curve.getTangentAt(lt),ft=new F(-_t.z,0,_t.x).normalize();for(const Rt of[H,-H]){const yt=mt.x+ft.x*3.6*Rt,me=mt.z+ft.z*3.6*Rt;if(!(y(yt,me)<2.7||!b(yt,me)||!dt(yt,me))&&!xt.some(jt=>Math.hypot(jt.x-yt,jt.z-me)<5.2)&&!(e.volcano&&Math.hypot(yt-e.volcano.x,me-e.volcano.z)<e.volcano.r+2)){xt.push({x:yt,z:me,tower:null}),Z++;break}}H=-H}}const Lt=(()=>{const L=document.createElement("canvas");L.width=L.height=256;const D=L.getContext("2d");D.fillStyle="#ffffff",D.fillRect(0,0,256,256);const H=ei(77);for(let lt=0;lt<260;lt++){const mt=200+H()*55|0;D.fillStyle=`rgba(${mt},${mt},${mt-6},${.25+H()*.35})`,D.beginPath(),D.ellipse(H()*256,H()*256,6+H()*26,3+H()*12,H()*3,0,Math.PI*2),D.fill()}D.strokeStyle="rgba(90,90,90,0.35)",D.lineWidth=1.5;for(let lt=0;lt<26;lt++){let mt=H()*256,_t=H()*256;D.beginPath(),D.moveTo(mt,_t);for(let ft=0;ft<4;ft++)mt+=(H()-.5)*30,_t+=H()*18,D.lineTo(mt,_t);D.stroke()}const Z=new Fi(L);return Z.colorSpace=rn,Z.wrapS=Z.wrapT=Ti,Z})(),Ft=new Fe({color:"#8c8f88",map:Lt}),Wt=new Fe({color:"#5f8a42",map:Lt}),ce=new be({color:"#ffe3a0",transparent:!0,opacity:.28,depthWrite:!1}),Qt=new be({color:"#f5f7f8",transparent:!0,opacity:.12,depthWrite:!1}),pe=new Pe(1.25,1.5,.9,8);pe.translate(0,.35,0);const W=new Pe(1.28,1.28,.12,8);W.translate(0,.82,0);const Ee=new fs(.55,.75,6);Ee.rotateX(-Math.PI/2);const te=new li(1,7,5),$t=xt.length,Ot=new an(pe,Ft,$t),he=new an(W,Wt,$t),j=new an(Ee,ce,$t),R=new an(te,Qt,$t*3);Ot.castShadow=Ot.receiveShadow=he.receiveShadow=!0;const S=new Ce;xt.forEach((L,D)=>{L.y0=f(L.x,L.z),L.y=L.y0+.88,S.position.set(L.x,L.y0,L.z),S.rotation.set(0,D,0),S.scale.setScalar(1),S.updateMatrix(),Ot.setMatrixAt(D,S.matrix),he.setMatrixAt(D,S.matrix)}),i.add(Ot,he,j,R);const G=L=>{xt.forEach((D,H)=>{const Z=!D.tower;S.position.set(D.x,D.y0+.9,D.z),S.rotation.set(0,L*.5,0),S.scale.setScalar(Z?1:0),S.updateMatrix(),j.setMatrixAt(H,S.matrix);for(let lt=0;lt<3;lt++){const mt=L*.4+lt*2.1+D.x,_t=(mt%1+1)%1;S.position.set(D.x+Math.cos(mt*2.3)*.9,D.y0+.5+_t*.9,D.z+Math.sin(mt*2.3)*.9),S.rotation.set(0,0,0),S.scale.set(Z?.6+_t*.5:0,Z?.3+_t*.2:0,Z?.6+_t*.5:0),S.updateMatrix(),R.setMatrixAt(H*3+lt,S.matrix)}}),j.instanceMatrix.needsUpdate=!0,R.instanceMatrix.needsUpdate=!0},$=new Me,J=f(s.x,s.z);$.position.set(s.x,J,s.z);const Q=(()=>{const L=document.createElement("canvas");L.width=512,L.height=512;const D=L.getContext("2d");D.fillStyle="#f6f1e6",D.fillRect(0,0,512,512);const H=ei(5);for(let lt=0;lt<520;lt++){const mt=H()*512,_t=H()*512,ft=2+H()*9,Rt=H()<.65;D.fillStyle=Rt?`rgba(${90+H()*40},${120+H()*40},${60+H()*20},${.12+H()*.18})`:`rgba(${130+H()*30},${95+H()*20},60,${.12+H()*.15})`,D.beginPath(),D.ellipse(mt,_t,ft,ft*(.4+H()*.6),H()*3,0,Math.PI*2),D.fill()}for(let lt=0;lt<1200;lt++){D.strokeStyle=`rgba(190,170,140,${.04+H()*.07})`,D.lineWidth=1;const mt=H()*512,_t=H()*512;D.beginPath(),D.moveTo(mt,_t),D.lineTo(mt+(H()-.5)*8,_t+6+H()*20),D.stroke()}for(let lt=0;lt<26;lt++){const mt=H()*512;D.strokeStyle=H()<.5?"rgba(255,255,255,0.35)":"rgba(150,130,100,0.18)",D.lineWidth=2+H()*5,D.beginPath(),D.moveTo(mt,512),D.bezierCurveTo(mt+40,350,mt-30,160,mt+20+H()*40,0),D.stroke()}D.strokeStyle="rgba(175,145,100,0.55)",D.lineWidth=4,D.beginPath(),D.moveTo(60,512),D.bezierCurveTo(90,330,110,180,150,0),D.stroke();const Z=new Fi(L);return Z.colorSpace=rn,Z.wrapS=Ti,Z})(),Et=new Fe({map:Q}),pt=(()=>{const L=document.createElement("canvas");L.width=L.height=128;const D=L.getContext("2d");D.fillStyle="#e9dcbf",D.fillRect(0,0,128,128),D.strokeStyle="#a88d62",D.lineWidth=3,D.beginPath();for(let Z=0;Z<Math.PI*9;Z+=.1){const lt=4+Z*2;D.lineTo(64+Math.cos(Z)*lt,64+Math.sin(Z)*lt)}D.stroke();const H=new Fi(L);return H.colorSpace=rn,H})(),Mt=new Fe({color:"#e6d8b8"}),Kt=new Fe({map:pt}),gt=new Fe({color:"#3a3330",flatShading:!0}),Ut=new Fe({color:"#b8b2aa",flatShading:!0}),qt=(()=>{const L=document.createElement("canvas");L.width=256,L.height=128;const D=L.getContext("2d"),H=D.createLinearGradient(0,0,0,128);H.addColorStop(0,"#fff0b0"),H.addColorStop(.45,"#ffb040"),H.addColorStop(1,"#ff5a10"),D.fillStyle=H,D.fillRect(0,0,256,128);const Z=ei(11);for(let mt=0;mt<70;mt++){const _t=Z();D.fillStyle=_t<.5?`rgba(70,60,55,${.5+Z()*.4})`:`rgba(170,165,160,${.5+Z()*.4})`,D.beginPath(),D.ellipse(Z()*256,20+Z()*108,4+Z()*14,2+Z()*6,Z()*3,0,Math.PI*2),D.fill()}D.strokeStyle="rgba(60,30,20,0.6)",D.lineWidth=1.5;for(let mt=0;mt<40;mt++){const _t=Z()*256,ft=Z()*128;D.beginPath(),D.moveTo(_t,ft),D.lineTo(_t+(Z()-.5)*30,ft+(Z()-.5)*20),D.stroke()}const lt=new Fi(L);return lt.colorSpace=rn,lt})(),Zt=new be({map:qt,color:new wt("#ffffff").multiplyScalar(2.2)});function Nt({len:L,rTop:D,rBot:H,crutchH:Z,seg:lt,bend:mt,glowMat:_t,shadow:ft}){const Rt=new Me,yt=new Jt(new Pe(H*.98,H*.95,Z,lt),[Mt,Mt,Kt]);yt.position.y=Z/2,yt.castShadow=ft,Rt.add(yt);const me=new Pe(D,H,L,lt,8,!0),jt=me.attributes.position,xe=ei(Math.round(L*100)),Qn=Array.from({length:6},()=>[xe()*6.28,xe()*3,.03+xe()*.04]);for(let Te=0;Te<jt.count;Te++){const Vn=jt.getY(Te),Gn=(Vn+L/2)/L,nr=Math.atan2(jt.getZ(Te),jt.getX(Te));let gs=1+Math.sin(nr*7+Vn*3)*.018;for(const[Bu,ku,Vu]of Qn)gs+=Math.cos(nr-Bu)*Math.sin(Gn*6+ku)*Vu*.5;jt.setXYZ(Te,jt.getX(Te)*gs+mt*Gn*Gn*L,Vn,jt.getZ(Te)*gs)}me.translate(0,Z+L/2,0),me.computeVertexNormals();const ke=new Jt(me,Et);ke.castShadow=ft,ke.receiveShadow=!0,Rt.add(ke);const Bn=mt*L,_e=Z+L,vn=new Pe(D*1.02,D*1.04,D*.35,lt,1,!0),ti=vn.attributes.position;for(let Te=0;Te<ti.count;Te++)ti.getY(Te)>0&&ti.setY(Te,ti.getY(Te)+Math.sin(Te*2.7)*D*.12);vn.computeVertexNormals();const tn=new Jt(vn,gt);tn.position.set(Bn,_e+D*.12,0),Rt.add(tn);const Sn=new Jt(new li(D*.97,lt,6,0,Math.PI*2,0,Math.PI/2),_t);Sn.scale.y=.38,Sn.position.set(Bn,_e+D*.2,0),Rt.add(Sn);const kn=[];for(let Te=0;Te<5;Te++){const Vn=new Jt(new Ba(D*(.2+Te%3*.07),0),Ut),Gn=Te*1.25+.3;Vn.position.set(Bn+Math.cos(Gn)*D*.55,_e+D*.33,Math.sin(Gn)*D*.55),Vn.scale.y=.4,Rt.add(Vn),kn.push(Vn)}const ps=new wi(D*.28,D*1.1,6,4),ms=ps.attributes.position;for(let Te=0;Te<ms.count;Te++){const Vn=ms.getY(Te),Gn=(Vn/(D*1.1)+.5)*2.2,nr=ms.getX(Te),gs=ms.getZ(Te);ms.setX(Te,nr*Math.cos(Gn)-gs*Math.sin(Gn)+(Vn+D*.55)*.25),ms.setZ(Te,nr*Math.sin(Gn)+gs*Math.cos(Gn))}ps.computeVertexNormals();const Wa=new Jt(ps,gt);return Wa.position.set(Bn+D*.1,_e+D*.7,D*.1),Wa.rotation.z=-.35,Rt.add(Wa),Rt.userData={glow:Sn,top:new F(Bn,_e,0),charRing:tn,ashFlakes:kn},Rt}const ne=new Jt(new Pe(3.3,3.9,1,9),Ft);ne.position.y=.3,ne.castShadow=ne.receiveShadow=!0,$.add(ne);const Yt=7.4,oe=1.4,V=Nt({len:Yt,rTop:2.35,rBot:.95,crutchH:oe,seg:22,bend:.06,glowMat:Zt,shadow:!0});V.position.y=.75,V.rotation.set(.06,0,-.03);const bt=V.userData.charRing;$.add(V);const it=new Ce;it.position.y=oe+Yt+1.2,V.add(it);const ut=new Tr("#ff8a3a",40,34,1.5);ut.position.y=oe+Yt+1.4,V.add(ut);const At=new wi(2.2,16,16,6,!0);At.translate(0,-8,0);{const L=At.attributes.position,D=new Float32Array(L.count*3);for(let H=0;H<L.count;H++){const Z=Math.pow(1-Math.min(1,-L.getY(H)/16),1.6);D.set([Z,Z,Z],H*3)}At.setAttribute("color",new ze(D,3))}At.rotateZ(Math.PI/2);const Ct=new be({color:"#ffc890",vertexColors:!0,transparent:!0,opacity:.05,blending:ri,depthWrite:!1,side:Ze,fog:!1}),I=new Me;I.position.y=oe+Yt+.8;const ot=new Jt(At,Ct),Dt=ot.clone();Dt.rotation.y=Math.PI,I.add(ot,Dt),V.add(I);const Bt=new Tr("#ffa050",12,10,1.4);Bt.position.set(0,1.3,4.6),$.add(Bt);const ue=[],ee=new be({color:new wt("#ffffff").multiplyScalar(3.2)}),De=new wt("#ff6a1a"),Ue=new wt("#1a1716"),Be=Nt({len:.78,rTop:.16,rBot:.075,crutchH:.16,seg:8,bend:.08,glowMat:ee,shadow:!0});Be.updateMatrixWorld(!0);for(let L=0;L<Dn;L++){const D=L/Dn*Math.PI*2,H=new Ce;H.position.set(Math.cos(D)*3.45,.8,Math.sin(D)*3.45),H.scale.setScalar(1.45),H.rotation.set(Math.sin(D)*.35,D,-Math.cos(D)*.35),$.add(H),H.updateMatrix(),ue.push(H)}let Ke=null;const Rn=new ve;for(const L of Be.children){if(!L.isMesh)continue;const D=new an(L.geometry,L.material,Dn);if(D.castShadow=L.castShadow,ue.forEach((H,Z)=>D.setMatrixAt(Z,Rn.multiplyMatrices(H.matrix,L.matrix))),L.material===ee){Ke=D;for(let H=0;H<Dn;H++)D.setColorAt(H,De)}$.add(D)}i.add($),$.updateMatrixWorld(!0);const yn=new F;it.getWorldPosition(yn);const gn={tip:yn,pos:new F(s.x,J,s.z),lights:Dn,flamePos(L){const D=new F(0,1,0);return ue[Math.max(0,Math.min(Dn-1,L))].localToWorld(D)},setLights(L){this.lights=L;for(let H=0;H<Dn;H++)Ke.setColorAt(H,H<L?De:Ue);Ke.instanceColor.needsUpdate=!0;const D=L/Dn;this.glow=D,Bt.intensity=3+9*D,Ct.opacity=.01+.04*D,bt.scale.y=1+(1-D)*2.5}},hn=ei(42),ui=[];for(let L=0;L<3e3&&ui.length<(t.mobile?70:104);L++){const D=(hn()-.5)*102,H=(hn()-.5)*102,Z=f(D,H);if(Z<.75||y(D,H)<3.2||!dt(D,H)||xt.some(ft=>Math.hypot(ft.x-D,ft.z-H)<3.2)||ui.some(ft=>Math.hypot(ft.x-D,ft.z-H)<2.4)||e.volcano&&Math.hypot(D-e.volcano.x,H-e.volcano.z)<e.volcano.r)continue;const lt=Z<1.45?e.trees.beach:e.trees.inland;let mt=hn(),_t="bush";for(const[ft,Rt]of Object.entries(lt)){if(mt<Rt){_t=ft;break}mt-=Rt}ui.push({x:D,z:H,y:Z,s:(_t==="bush"?.8:.75)+hn()*.45,phase:hn()*6.28,kind:_t})}const tr=yv(i,ui,t,e),Ai=new Ce,fi=[];for(let L=0;L<1200&&fi.length<(t.mobile?40:56);L++){const D=hn()*Math.PI*2,H=n(D)-3+hn()*5.5,Z=Math.cos(D)*H,lt=Math.sin(D)*H;y(Z,lt)<3.4||f(Z,lt)<-1.2||fi.some(mt=>Math.hypot(mt.x-Z,mt.z-lt)<2.2)||fi.push({x:Z,z:lt,s:.6+hn()*1.2,r:hn()*6})}for(const L of e.plateaus||[]){const D=Math.round(L.r*2*Math.PI/2.3);for(let H=0;H<D;H++){const Z=H/D*Math.PI*2+hn()*.2,lt=L.r+Math.sin(Z*5+L.x)*.8+Math.sin(Z*11)*.3-.2,mt=L.x+Math.cos(Z)*lt,_t=L.z+Math.sin(Z)*lt;e.waterfall&&Math.hypot(mt-e.waterfall.lip[0],_t-e.waterfall.lip[1])<2.2||y(mt,_t)<2.6||fi.push({x:mt,z:_t,s:1.3+hn()*.9,r:hn()*6,cliff:!0})}}[0,1,2].map(L=>Iv(ei(31+L*7+e.seed),e.rock[0],e.rock[1],L)).map((L,D)=>{const H=fi.filter((lt,mt)=>mt%3===D),Z=new an(L,new Fe({vertexColors:!0,map:Lt}),Math.max(1,H.length));return Z.count=H.length,H.forEach((lt,mt)=>{Ai.position.set(lt.x,f(lt.x,lt.z)-.2*lt.s,lt.z),Ai.rotation.set(0,lt.r*2,0),Ai.scale.set(lt.s*1.1,lt.s*.9,lt.s),Ai.updateMatrix(),Z.setMatrixAt(mt,Ai.matrix)}),Z.castShadow=Z.receiveShadow=!0,i.add(Z),Z});const er=mv(i,{heightAt:f,pathDist:y,plinths:xt,paths:r,lighthouse:gn},t,ei(99+e.seed),n,e),P=Lv(i,{heightAt:f,pathDist:y,paths:r,lighthouse:gn,islandEdge:n},t,e),X=bv(i,{heightAt:f,pathDist:y,plinths:xt,lighthouse:gn,extrasBlock:P.blocks},t,e,ei(7+e.seed)),tt=Float32Array.from(v),nt=[...fi.map(L=>({x:L.x,z:L.z,r:L.s*.85})),...er.obstacles];for(const L of nt){const D=L.r+1,H=p*2/d,Z=Math.floor((L.x-D+p)/H),lt=Math.ceil((L.x+D+p)/H),mt=Math.floor((L.z-D+p)/H),_t=Math.ceil((L.z+D+p)/H);for(let ft=Math.max(0,mt);ft<=Math.min(d,_t);ft++)for(let Rt=Math.max(0,Z);Rt<=Math.min(d,lt);Rt++){const yt=-p+Rt*H,me=-p+ft*H,jt=Math.max(0,Math.hypot(yt-L.x,me-L.z)-L.r);if(jt>.9)continue;const xe=ft*(d+1)+Rt,Qn=.06-jt*.35,ke=1-jt/.9;tt[xe]=Math.max(tt[xe],tt[xe]+(Qn-tt[xe])*ke*ke)}}if(e.waterfall&&e.waterfall._lvl!==void 0){const L=e.waterfall;vh(i,{heightTex:xh(tt,d+1),ext:p,grid:d,quality:t,sunDir:new F(24,17,4),colors:e.water,level:L._lvl,size:9,maxDepth:.8,center:[(L.pool[0]+L.lip[0])/2,(L.pool[1]+L.lip[1])/2]})}const q=vh(i,{heightTex:xh(tt,d+1),ext:p,grid:d,quality:t,sunDir:new F(24,17,4),colors:e.water}),St=[{x:s.x,z:s.z,r:3.5},...xt.map(L=>({x:L.x,z:L.z,r:1.4})),...tr.colliders,...fi.filter(L=>f(L.x,L.z)>-.45).map(L=>({x:L.x,z:L.z,r:L.s*.85})),...er.colliders,...P.colliders];return{def:e,paths:r,plinths:xt,lighthouse:gn,heightAt:f,pathDist:y,slopeAt:A,isLand:b,isIce:E,landDist:u,isWalkable:(L,D)=>T(L,D)&&!P.blocks(L,D),colliders:St,update:L=>{q.update(L),er.update(L),P.update(L),X.update(L);const D=gn.glow??1,H=.75+.25*Math.sin(L*1.3)+.1*Math.sin(L*7.1);Zt.color.setRGB(1,.85,.75).multiplyScalar(D>0?(.7+1.5*D)*H:.12),ut.intensity=(8+40*D)*H,I.rotation.y=L*.6,tr.update(L);const Z=gn._c||(gn._c=new wt);for(let lt=0;lt<gn.lights;lt++)Ke.setColorAt(lt,Z.copy(De).multiplyScalar(.75+.25*Math.sin(L*9+lt*1.7)));Ke.instanceColor.needsUpdate=!0,G(L)},terrain:ht,extras:P,grass:X}}const fe=(i,t={})=>new Fe({color:i,flatShading:!0,...t}),oa=(i,t)=>new be({color:new wt(i).multiplyScalar(t)}),zt={coat:fe("#f2c23c"),coatDark:fe("#c99a22"),skin:fe("#f1c7a0"),beanieG:fe("#3f8f4a"),beanieY:fe("#f2c94c"),beanieR:fe("#d4553a"),boot:fe("#3a2c22"),eyeW:new be({color:"#ffffff"}),eyeB:new be({color:"#1c1820"}),suit:fe("#6b6f78"),suitDark:fe("#3c4150"),suitNavy:fe("#2c3a5c"),shirt:fe("#f4f1ea"),tie:fe("#b8322a"),paper:fe("#fbfaf4"),stampInk:fe("#a8233a"),woodLight:fe("#c49360"),glasses:fe("#222428"),binderR:fe("#c94f3f"),binderB:fe("#3f6fc9"),binderY:fe("#e6b93f"),gull:fe("#f4f2ee"),gullWing:fe("#b8c0c8"),beak:fe("#f0a43a"),megaRed:fe("#d8453a"),mouth:new be({color:"#4a2a2a"}),smile:new be({color:"#c8485a"}),wood:fe("#9a6a42"),woodDark:fe("#6e4a2c"),iron:fe("#55585e"),speaker:fe("#2a2a30"),cone:fe("#4a4a52"),rasG:fe("#3f9a4a"),rasY:fe("#f2c94c"),rasR:fe("#d4553a"),chipsBag:fe("#f2b632"),chipsRed:fe("#d8453a"),chip:fe("#f0c860"),ringMat:new Fe({color:"#f1efe9",transparent:!0,opacity:.8}),ember:oa("#ff9a3a",2.4),emberCore:oa("#fff1c2",2),rolling:fe("#5a9a5a"),rollingPaper:fe("#fffdf5"),lantern:oa("#ffd27a",2.2),hpBg:new be({color:"#2a2020",depthTest:!1,transparent:!0,opacity:.6}),hpFg:new be({color:"#d8553a",depthTest:!1}),levelPip:oa("#9fffb0",1.6)},kt={sphere:new li(1,10,8),lowSphere:new ki(1,1),capsule:new Oa(.5,.7,3,8),cyl:new Pe(1,1,1,10),cone:new wi(1,1,10),box:new En(1,1,1),dome:new li(1,10,6,0,Math.PI*2,0,Math.PI/2),ember:new wr(.22,0),leaf:new wr(.3,0),plane:new Jn(1,1),smileArc:new Er(.06,.018,4,10,Math.PI),ring:new Er(.32,.12,6,14)};function Ht(i,t,e,n,s,r=0,a=0,o=0,l=!0){const c=new Jt(i,t);return c.scale.set(e,n,s),c.position.set(r,a,o),c.castShadow=l,c}function tc(i,t,e,n,s=.12,r=.18){for(const a of[-1,1])i.add(Ht(kt.sphere,zt.eyeW,s,s,s,t+a*r,e,n,!1)),i.add(Ht(kt.sphere,zt.eyeB,s*.55,s*.55,s*.55,t+a*r,e+.01,n-s*.7,!1))}function vu(i,t,e,n=1){const s=Ht(kt.box,zt.mouth,.14*n,.025*n,.02,0,t,e,!1);s.rotation.z=.15;const r=Ht(kt.smileArc,zt.smile,n,n,n,0,t+.03*n,e,!1);return r.rotation.z=Math.PI,r.visible=!1,i.add(s,r),{sour:s,smile:r}}function Fv(){const i=new Me,t=new Me;i.add(t),t.add(Ht(kt.capsule,zt.coat,.75,.75,.7,0,.75,0)),t.add(Ht(kt.cyl,zt.coatDark,.4,.06,.38,0,.62,0));const e=new Me;e.position.y=1.55,e.add(Ht(kt.sphere,zt.skin,.33,.32,.32)),e.add(Ht(kt.cyl,zt.beanieG,.35,.1,.35,0,.14,0)),e.add(Ht(kt.cyl,zt.beanieY,.31,.1,.31,0,.24,0)),e.add(Ht(kt.dome,zt.beanieR,.27,.22,.27,0,.29,0)),e.add(Ht(kt.sphere,zt.beanieY,.08,.08,.08,0,.52,0)),tc(e,0,.02,-.26,.07,.12);const n=vu(e,-.12,-.3,.8);n.sour.visible=!1,n.smile.visible=!0,t.add(e);const s=[-1,1].map(l=>{const c=Ht(kt.capsule,zt.boot,.24,.32,.24,l*.18,.2,0);return t.add(c),c}),r=new Me;r.position.set(.48,1,-.1),r.add(Ht(kt.box,zt.iron,.2,.28,.2,0,-.25,0)),r.add(Ht(kt.sphere,zt.lantern,.1,.13,.1,0,-.25,0,!1)),t.add(r);const a=new Me;a.add(Ht(kt.box,zt.rolling,.7,.12,.42,0,0,0,!1)),a.add(Ht(kt.box,zt.rollingPaper,.6,.08,.36,.06,.08,0,!1)),a.add(Ht(kt.leaf,zt.rasG,.35,.05,.35,-.12,.07,0,!1)),a.position.y=2.35,a.visible=!1,i.add(a);const o=new Me;o.position.y=2;for(let l=0;l<3;l++)o.add(Ht(kt.ember,zt.emberCore,.6,.6,.6,Math.cos(l*2.1)*.45,0,Math.sin(l*2.1)*.45,!1));return o.visible=!1,i.add(o),i.userData={body:t,legs:s,head:e,lanternArm:r,carried:a,stars:o},i}function la(i,t){const e=new Me;e.position.y=t;const n=new Jt(kt.plane,zt.hpBg);n.scale.set(1,.14,1),n.renderOrder=10;const s=new Jt(kt.plane,zt.hpFg.clone());s.scale.set(.96,.09,1),s.position.z=.001,s.renderOrder=11,e.add(n,s),e.visible=!1,i.add(e),i.userData.hpBar=e,i.userData.hpFg=s}function To(i,{scale:t=1,suit:e=zt.suit,wide:n=1}={}){const s=t;i.add(Ht(kt.capsule,e,.7*s*n,.62*s,.6*s,0,.72*s,0)),i.add(Ht(kt.box,zt.shirt,.22*s,.4*s,.05,0,.98*s,-.27*s*Math.min(n,1.2),!1)),i.add(Ht(kt.box,zt.tie,.07*s,.32*s,.05,0,.94*s,-.29*s*Math.min(n,1.2),!1));for(const o of[-1,1])i.add(Ht(kt.capsule,zt.suitDark,.2*s,.25*s,.2*s,o*.16*s,.17*s,0));const r=new Me;r.position.y=1.5*s,r.add(Ht(kt.sphere,zt.skin,.3*s,.3*s,.3*s)),r.add(Ht(kt.dome,zt.suitDark,.31*s,.14*s,.31*s,0,.12*s,.02)),tc(r,0,.03*s,-.25*s,.065*s,.11*s);const a=vu(r,-.12*s,-.28*s,s);return i.add(r),{head:r,mouth:a}}function zv(i){const t=new Me,e=new Me;if(t.add(e),t.userData.body=e,i==="clerk"){const{head:n,mouth:s}=To(e);for(const o of[-1,1])n.add(Ht(kt.box,zt.glasses,.11,.07,.02,o*.11,.03,-.3,!1));n.add(Ht(kt.box,zt.glasses,.08,.015,.02,0,.04,-.3,!1));const r=new Me;r.position.set(.48,.9,-.15),r.add(Ht(kt.cyl,zt.woodLight,.06,.25,.06,0,.12,0)),r.add(Ht(kt.sphere,zt.woodLight,.09,.09,.09,0,.27,0)),r.add(Ht(kt.box,zt.stampInk,.22,.08,.16,0,-.02,0)),e.add(r);const a=Ht(kt.box,zt.paper,.3,.38,.02,-.46,.92,-.2);a.rotation.y=.4,e.add(a),t.userData.mouth=s,t.userData.arm=r,la(t,2.15)}else if(i==="tank"){const{mouth:n}=To(e,{scale:1.25,suit:zt.suitNavy,wide:1.45}),s=new Me;s.position.set(0,0,-.95),s.add(Ht(kt.box,zt.woodDark,.75,1.05,.45,0,.52,0));const r=Ht(kt.box,zt.woodLight,.9,.08,.6,0,1.1,.04);r.rotation.x=.35,s.add(r),s.add(Ht(kt.cyl,zt.iron,.02,.45,.02,.18,1.3,.1,!1)),s.add(Ht(kt.sphere,zt.speaker,.05,.05,.05,.18,1.52,.04,!1)),e.add(s),t.userData.mouth=n,la(t,2.6)}else if(i==="gull"){e.add(Ht(kt.lowSphere,zt.gull,.36,.3,.6,0,0,0)),e.add(Ht(kt.cone,zt.beak,.08,.3,.08,0,0,-.65).rotateX(-Math.PI/2));const n=Ht(kt.cone,zt.megaRed,.2,.5,.2,0,-.22,-.65);n.rotation.x=Math.PI/2,e.add(n),e.add(Ht(kt.cyl,zt.paper,.21,.06,.21,0,-.22,-.89).rotateX(Math.PI/2));const s=[-1,1].map(r=>{const a=new Me;return a.position.set(r*.25,.05,0),a.add(Ht(kt.box,zt.gullWing,.95,.05,.42,r*.48,0,0)),e.add(a),a});t.userData.wings=s,tc(e,0,.12,-.42,.06,.13),t.userData.mouth=null,la(t,.8)}else if(i==="swarm"){const{mouth:n}=To(e,{scale:.6}),s=[zt.binderR,zt.binderB,zt.binderY],r=Ht(kt.box,s[Math.floor(Math.random()*3)],.08,.34,.28,.32,.55,-.08);e.add(r),t.userData.mouth=n,la(t,1.3)}return t}function Ov(i){const t=i.mesh.userData.mouth;t&&(t.sour.visible=!1,t.smile.visible=!0),i.mesh.userData.hpBar.visible=!1}function Bv(i){const t=new Me,e=new Me;if(t.add(e),i==="ring"){t.add(Ht(kt.box,zt.wood,.9,.5,.9,0,.25,0)),e.position.y=.95;const a=Ht(kt.cyl,zt.iron,.32,1.1,.32,0,0,-.15);a.rotation.x=Math.PI/2-.15,e.add(a),e.add(Ht(kt.cyl,zt.woodDark,.38,.12,.38,0,.08,-.7).rotateX(Math.PI/2-.15)),e.add(Ht(kt.sphere,zt.iron,.42,.42,.42,0,0,.42)),e.add(Ht(kt.sphere,zt.ember,.12,.12,.12,0,.1,.8,!1))}else if(i==="chips"){t.add(Ht(kt.cyl,zt.iron,.7,.3,.7,0,.15,0)),e.position.y=.3;const a=Ht(kt.box,zt.chipsBag,.95,1.1,.6,0,.6,0);a.rotation.x=-.35,e.add(a),e.add(Ht(kt.box,zt.chipsRed,.97,.3,.62,0,.55,0).rotateX(-.35));for(let o=0;o<5;o++)e.add(Ht(kt.leaf,zt.chip,.3,.08,.3,(o-2)*.17,1.2,-.3-o%2*.1,!1))}else if(i==="speaker"){const a=new Me;a.add(Ht(kt.box,zt.speaker,1,1.5,.75,0,.75,0)),a.add(Ht(kt.box,zt.rasG,1.02,.12,.77,0,1.38,0,!1)),a.add(Ht(kt.box,zt.rasY,1.02,.12,.77,0,1.26,0,!1)),a.add(Ht(kt.box,zt.rasR,1.02,.12,.77,0,1.14,0,!1));const o=[];for(const[l,c]of[[.85,.33],[.35,.2]]){const u=Ht(kt.cyl,zt.cone,c,.08,c,0,l,-.38,!1);u.rotation.x=Math.PI/2,a.add(u),o.push(u)}e.add(a),t.userData.woofers=o}const n=[];for(let a=0;a<3;a++){const o=Ht(kt.leaf,zt.levelPip,.6,.12,.6,Math.cos(a*2.09)*.95,.15,Math.sin(a*2.09)*.95,!1);o.visible=a===0,t.add(o),n.push(o)}const s=new fs(1.45,1.7,40,1,0,Math.PI*2);s.rotateX(-Math.PI/2);const r=new Jt(s,new be({color:"#9fffb0",transparent:!0,opacity:.8,depthWrite:!1}));return r.position.y=.06,r.visible=!1,t.add(r),t.traverse(a=>{a.isMesh&&a!==r&&a.material!==zt.levelPip&&(a.castShadow=!0)}),t.userData.head=e,t.userData.pips=n,t.userData.ring=r,t}function xu(i,t){i.mesh.userData.pips.forEach((e,n)=>e.visible=n<t),i.mesh.scale.setScalar(1+(t-1)*.12)}function wa(i,t){const e=i.mesh.userData.ring;if(e.visible=t>0,t<=0)return;e.geometry.dispose();const n=new fs(1.45,1.7,40,1,0,Math.PI*2*t);n.rotateX(-Math.PI/2),e.geometry=n}function kv(){const i=new Me;return i.add(Ht(kt.ember,zt.ember,1,1.3,1,0,0,0,!1)),i.add(Ht(kt.ember,zt.emberCore,.5,.7,.5,0,0,0,!1)),i}function Vv(){const i=new Jt(kt.ring,zt.ringMat);return i.castShadow=!1,i}function Gv(){const i=new Me;return i.add(Ht(kt.box,zt.chipsBag,.32,.4,.14,0,0,0,!0)),i.add(Ht(kt.box,zt.chipsRed,.33,.12,.15,0,.02,0,!1)),i}function _u(){const i=new Er(1,.08,4,32);return i.rotateX(Math.PI/2),new Jt(i,new be({color:"#c8ffd0",transparent:!0,opacity:.7,depthWrite:!1}))}const _r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ds{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hv=new Wl(-1,1,1,-1,0,1);class Wv extends Re{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}}const Xv=new Wv;class ka{constructor(t){this._mesh=new Jt(Xv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Hv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ea extends ds{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ne?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=jn.clone(t.uniforms),this.material=new Ne({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ka(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class yh extends ds{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class qv extends ds{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Yv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Tt);this._width=n.width,this._height=n.height,e=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ea(_r),this.copyPass.material.blending=Je,this.clock=new gu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}yh!==void 0&&(a instanceof yh?n=!0:a instanceof qv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jv extends ds{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new wt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const ca={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Tt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ve},cameraProjectionMatrixInverse:{value:new ve},cameraWorldMatrix:{value:new ve},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

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
		}`},ha={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ao={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function $v(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=Zv(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=e[a],l=2*Math.PI*o/n,c=new F(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new Fa(s,t,t);return r.wrapS=Ti,r.wrapT=Ti,r.needsUpdate=!0,r}function Zv(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}const ua={defines:{SAMPLES:16,SAMPLE_VECTORS:Mu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Tt},cameraProjectionMatrixInverse:{value:new ve},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Mu(i,t,e){const n=Kv(i,t,e);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Kv(i,t,e){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new F(Math.cos(r),Math.sin(r),a))}return n}class Jv{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,p=l-h,d=c-h,v=t-p,M=e-d;let m,f;v>M?(m=1,f=0):(m=0,f=1);const y=v-m+u,b=M-f+u,g=v-1+2*u,A=M-1+2*u,E=l&255,w=c&255,T=this.perm[E+this.perm[w]]%12,_=this.perm[E+m+this.perm[w+f]]%12,x=this.perm[E+1+this.perm[w+1]]%12;let C=.5-v*v-M*M;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[T],v,M));let N=.5-y*y-b*b;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[_],y,b));let z=.5-g*g-A*A;return z<0?r=0:(z*=z,r=z*z*this.dot(this.grad3[x],g,A)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o;const c=(t+e+n)*.3333333333333333,u=Math.floor(t+c),h=Math.floor(e+c),p=Math.floor(n+c),d=1/6,v=(u+h+p)*d,M=u-v,m=h-v,f=p-v,y=t-M,b=e-m,g=n-f;let A,E,w,T,_,x;y>=b?b>=g?(A=1,E=0,w=0,T=1,_=1,x=0):y>=g?(A=1,E=0,w=0,T=1,_=0,x=1):(A=0,E=0,w=1,T=1,_=0,x=1):b<g?(A=0,E=0,w=1,T=0,_=1,x=1):y<g?(A=0,E=1,w=0,T=0,_=1,x=1):(A=0,E=1,w=0,T=1,_=1,x=0);const C=y-A+d,N=b-E+d,z=g-w+d,U=y-T+2*d,O=b-_+2*d,k=g-x+2*d,Y=y-1+3*d,B=b-1+3*d,K=g-1+3*d,at=u&255,ct=h&255,vt=p&255,Xt=this.perm[at+this.perm[ct+this.perm[vt]]]%12,et=this.perm[at+A+this.perm[ct+E+this.perm[vt+w]]]%12,ht=this.perm[at+T+this.perm[ct+_+this.perm[vt+x]]]%12,xt=this.perm[at+1+this.perm[ct+1+this.perm[vt+1]]]%12;let dt=.6-y*y-b*b-g*g;dt<0?s=0:(dt*=dt,s=dt*dt*this.dot3(this.grad3[Xt],y,b,g));let Lt=.6-C*C-N*N-z*z;Lt<0?r=0:(Lt*=Lt,r=Lt*Lt*this.dot3(this.grad3[et],C,N,z));let Ft=.6-U*U-O*O-k*k;Ft<0?a=0:(Ft*=Ft,a=Ft*Ft*this.dot3(this.grad3[ht],U,O,k));let Wt=.6-Y*Y-B*B-K*K;return Wt<0?o=0:(Wt*=Wt,o=Wt*Wt*this.dot3(this.grad3[xt],Y,B,K)),32*(s+r+a+o)}noise4d(t,e,n,s){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,p,d,v;const M=(t+e+n+s)*l,m=Math.floor(t+M),f=Math.floor(e+M),y=Math.floor(n+M),b=Math.floor(s+M),g=(m+f+y+b)*c,A=m-g,E=f-g,w=y-g,T=b-g,_=t-A,x=e-E,C=n-w,N=s-T,z=_>x?32:0,U=_>C?16:0,O=x>C?8:0,k=_>N?4:0,Y=x>N?2:0,B=C>N?1:0,K=z+U+O+k+Y+B,at=a[K][0]>=3?1:0,ct=a[K][1]>=3?1:0,vt=a[K][2]>=3?1:0,Xt=a[K][3]>=3?1:0,et=a[K][0]>=2?1:0,ht=a[K][1]>=2?1:0,xt=a[K][2]>=2?1:0,dt=a[K][3]>=2?1:0,Lt=a[K][0]>=1?1:0,Ft=a[K][1]>=1?1:0,Wt=a[K][2]>=1?1:0,ce=a[K][3]>=1?1:0,Qt=_-at+c,pe=x-ct+c,W=C-vt+c,Ee=N-Xt+c,te=_-et+2*c,$t=x-ht+2*c,Ot=C-xt+2*c,he=N-dt+2*c,j=_-Lt+3*c,R=x-Ft+3*c,S=C-Wt+3*c,G=N-ce+3*c,$=_-1+4*c,J=x-1+4*c,Q=C-1+4*c,Et=N-1+4*c,pt=m&255,Mt=f&255,Kt=y&255,gt=b&255,Ut=o[pt+o[Mt+o[Kt+o[gt]]]]%32,qt=o[pt+at+o[Mt+ct+o[Kt+vt+o[gt+Xt]]]]%32,Zt=o[pt+et+o[Mt+ht+o[Kt+xt+o[gt+dt]]]]%32,Nt=o[pt+Lt+o[Mt+Ft+o[Kt+Wt+o[gt+ce]]]]%32,ne=o[pt+1+o[Mt+1+o[Kt+1+o[gt+1]]]]%32;let Yt=.6-_*_-x*x-C*C-N*N;Yt<0?u=0:(Yt*=Yt,u=Yt*Yt*this.dot4(r[Ut],_,x,C,N));let oe=.6-Qt*Qt-pe*pe-W*W-Ee*Ee;oe<0?h=0:(oe*=oe,h=oe*oe*this.dot4(r[qt],Qt,pe,W,Ee));let V=.6-te*te-$t*$t-Ot*Ot-he*he;V<0?p=0:(V*=V,p=V*V*this.dot4(r[Zt],te,$t,Ot,he));let bt=.6-j*j-R*R-S*S-G*G;bt<0?d=0:(bt*=bt,d=bt*bt*this.dot4(r[Nt],j,R,S,G));let it=.6-$*$-J*J-Q*Q-Et*Et;return it<0?v=0:(it*=it,v=it*it*this.dot4(r[ne],$,J,Q,Et)),27*(u+h+p+d+v)}}class ni extends ds{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=$v(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new _n(this.width,this.height,{type:Fn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ne({defines:Object.assign({},ca.defines),uniforms:jn.clone(ca.uniforms),vertexShader:ca.vertexShader,fragmentShader:ca.fragmentShader,blending:Je,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new cv,this.normalMaterial.blending=Je,this.pdMaterial=new Ne({defines:Object.assign({},ua.defines),uniforms:jn.clone(ua.uniforms),vertexShader:ua.vertexShader,fragmentShader:ua.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ne({defines:Object.assign({},ha.defines),uniforms:jn.clone(ha.uniforms),vertexShader:ha.vertexShader,fragmentShader:ha.fragmentShader,blending:Je}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ne({uniforms:jn.clone(_r.uniforms),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:zo,blendDst:ur,blendEquation:qn,blendSrcAlpha:Fo,blendDstAlpha:ur,blendEquationAlpha:qn}),this.blendMaterial=new Ne({uniforms:jn.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ih,blendSrc:zo,blendDst:ur,blendEquation:qn,blendSrcAlpha:Fo,blendDstAlpha:ur,blendEquationAlpha:qn}),this.fsQuad=new ka(null),this.originalClearColor=new wt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new ql,this.depthTexture.format=ls,this.depthTexture.type=os,this.normalRenderTarget=new _n(this.width,this.height,{minFilter:ln,magFilter:ln,type:Fn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Mu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case ni.OUTPUT.Off:break;case ni.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Je,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ni.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Je,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ni.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Je,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ni.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case ni.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Je,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case ni.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Je,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new Jv,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){const l=a,c=o;s[(a*t+o)*4]=(e.noise(l,c)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new Fa(s,t,t,In,ai);return r.wrapS=Ti,r.wrapT=Ti,r.needsUpdate=!0,r}}ni.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Qv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new wt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ys extends ds{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Tt(t.x,t.y):new Tt(256,256),this.clearColor=new wt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(r,a,{type:Fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const p=new _n(r,a,{type:Fn});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const d=new _n(r,a,{type:Fn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=Qv;this.highPassUniforms=jn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ne({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Tt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=_r;this.copyUniforms=jn.clone(u.uniforms),this.blendMaterial=new Ne({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ri,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new wt,this.oldClearAlpha=1,this.basic=new be,this.fsQuad=new ka(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Tt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ys.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ne({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Tt(.5,.5)},direction:{value:new Tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ne({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ys.BlurDirectionX=new Tt(1,0);Ys.BlurDirectionY=new Tt(0,1);const tx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ex extends ds{constructor(){super();const t=tx;this.uniforms=jn.clone(t.uniforms),this.material=new lv({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ka(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ge.getTransfer(this._outputColorSpace)===ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ll?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const nx={name:"HorizontalTiltShiftShader",uniforms:{tDiffuse:{value:null},h:{value:1/512},r:{value:.35}},vertexShader:`

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

		}`},ix={name:"VerticalTiltShiftShader",uniforms:{tDiffuse:{value:null},v:{value:1/512},r:{value:.35}},vertexShader:`

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

		}`},sx={name:"WarmGrade",uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uTint:{value:new F(1,1,1)},uLift:{value:new F},uSat:{value:1.08}},vertexShader:`
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
    }`},rx=new URLSearchParams(location.search).get("ao")==="1";function ax(i,t,e,n={}){const s=new Yv(i,new _n(1,1,{type:Fn})),r=new jv(t,e),a=new ni(t,e,1,1,void 0,{radius:.8,distanceExponent:1.3,thickness:1.4,scale:1.2,samples:12});a.blendIntensity=1;const o=new Ys(new Tt(256,256),.6,.55,1),l=new Ea(nx),c=new Ea(ix);l.uniforms.r.value=c.uniforms.r.value=.52;const u=new Ea(sx);n.tint&&u.uniforms.uTint.value.set(...n.tint),n.lift&&u.uniforms.uLift.value.set(...n.lift),n.sat&&(u.uniforms.uSat.value=n.sat),u.uniforms.uVignette.value=n.vignette??.25;const h=new ex;for(const m of[r,a,o,l,c,u,h])s.addPass(m);let p="high",d=1,v=1;const M={composer:s,get level(){return p},setLevel(m){p=m,a.enabled=m==="high"&&rx,o.strength=m==="high"?.6:.5,M.setSize(d,v)},setSize(m,f){d=m,v=f;const y=i.getPixelRatio();s.setPixelRatio(y),s.setSize(m,f);const b=p==="high"?2:4;o.resolution.set(m*y/b,f*y/b),o.setSize(m*y/b,f*y/b);const g=p==="high"?.7:.5;l.uniforms.h.value=g/(m*y),c.uniforms.v.value=g/(f*y)},render(m){s.render(m)}};return M}function ox(i,t,e,n,s){const{heightAt:r}=t,a=e.mobile?.5:1,o=new Set(n.life),l=new Ce,c=new wt,u=[],h=()=>{for(let d=0;d<50;d++){const v=(Math.random()-.5)*80,M=(Math.random()-.5)*80,m=r(v,M);if(m>.8)return{x:v,z:M,h:m}}return{x:0,z:0,h:1}};if(o.has("butterflies")){const d=Math.round(26*a),v=new qs(.16,6,0,Math.PI);v.scale(1,1.3,1);const m=[-1,1].map(()=>new Fe({color:"#ffffff",side:Ze})).map(b=>{const g=new an(v,b,d);return i.add(g),g}),f=Array.from({length:d},(b,g)=>({...h(),a:Math.random()*6,sp:.6+Math.random()*.6,ph:Math.random()*6,home:null})),y=["#ffd84a","#ff9ad0","#9ad8ff","#ffffff","#ffa040"];f.forEach((b,g)=>{b.home={x:b.x,z:b.z},m.forEach(A=>A.setColorAt(g,c.set(y[g%y.length])))}),m.forEach(b=>b.instanceColor.needsUpdate=!0),u.push((b,g)=>{f.forEach((A,E)=>{A.a+=Math.sin(g*.7+A.ph)*1.6*b,A.x+=Math.cos(A.a)*A.sp*b,A.z+=Math.sin(A.a)*A.sp*b,Math.hypot(A.x-A.home.x,A.z-A.home.z)>5&&(A.a=Math.atan2(A.home.z-A.z,A.home.x-A.x));const w=r(A.x,A.z)+.6+Math.sin(g*2+A.ph)*.25,T=Math.sin(g*18+A.ph)*1.1;m.forEach((_,x)=>{l.position.set(A.x,w,A.z),l.rotation.set(0,-A.a+Math.PI/2,0),l.rotateZ((x?1:-1)*(.3+T*.5)),l.rotateX(-Math.PI/2),l.scale.set(x?1:-1,1,1),l.updateMatrix(),_.setMatrixAt(E,l.matrix)})}),m.forEach(A=>A.instanceMatrix.needsUpdate=!0)})}if(o.has("birds")){const v=new Re;v.setAttribute("position",new se([-.7,.12,.1,0,0,-.15,0,0,.15,0,0,-.15,.7,.12,.1,0,0,.15],3)),v.computeVertexNormals();const M=new an(v,new Fe({color:"#f4f4f0",side:Ze}),7);M.castShadow=!0,i.add(M);const m=Array.from({length:7},(f,y)=>({cx:(Math.random()-.5)*50,cz:(Math.random()-.5)*50,r:8+Math.random()*10,y:9+Math.random()*4,sp:.15+Math.random()*.1,ph:y}));u.push((f,y)=>{m.forEach((b,g)=>{const A=y*b.sp+b.ph;l.position.set(b.cx+Math.cos(A)*b.r,b.y+Math.sin(y*.7+g)*.4,b.cz+Math.sin(A)*b.r),l.rotation.set(0,-A,Math.sin(y*.5+g)*.15);const E=1+Math.sin(y*6+g)*.35*(Math.sin(y*.4+g)>.3?1:.1);l.scale.set(1.4,E*1.4,1.4),l.updateMatrix(),M.setMatrixAt(g,l.matrix)}),M.instanceMatrix.needsUpdate=!0})}if(o.has("leaves")){const d=Math.round(60*a),v=new Jn(.16,.1),M=new an(v,new Fe({color:"#ffffff",side:Ze}),d);i.add(M);const m=Array.from({length:d},(f,y)=>({...h(),ph:Math.random()*6,sp:1+Math.random()*1.5}));m.forEach((f,y)=>M.setColorAt(y,c.set(["#8fbf4a","#c8b04a","#6a9a3a","#d89a3a"][y%4]))),M.instanceColor.needsUpdate=!0,u.push((f,y)=>{m.forEach((b,g)=>{b.x+=b.sp*f,b.z+=Math.sin(y*.8+b.ph)*.6*f,b.x>45&&Object.assign(b,h(),{x:-45});const A=Math.max(r(b.x,b.z),.1)+.3+Math.abs(Math.sin(y*1.3+b.ph))*.9;l.position.set(b.x,A,b.z),l.rotation.set(y*3+b.ph,y*2+b.ph,y*1.5),l.scale.setScalar(1),l.updateMatrix(),M.setMatrixAt(g,l.matrix)}),M.instanceMatrix.needsUpdate=!0})}if(o.has("fireflies")&&s==="skumring"){const d=Math.round(120*a),v=new Float32Array(d*3),M=new Float32Array(d*3),m=Array.from({length:d},()=>({...h(),ph:Math.random()*6})),f=new Re;f.setAttribute("position",new ze(v,3)),f.setAttribute("color",new ze(M,3));const y=document.createElement("canvas");y.width=y.height=32;const b=y.getContext("2d"),g=b.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(1,"rgba(255,255,255,0)"),b.fillStyle=g,b.fillRect(0,0,32,32);const A=new jl(f,new za({size:.35,map:new Fi(y),vertexColors:!0,transparent:!0,blending:ri,depthWrite:!1}));A.frustumCulled=!1,i.add(A),u.push((E,w)=>{m.forEach((T,_)=>{v[_*3]=T.x+Math.sin(w*.4+T.ph)*1.2,v[_*3+1]=T.h+.5+Math.sin(w*.9+T.ph*2)*.4,v[_*3+2]=T.z+Math.cos(w*.35+T.ph)*1.2;const x=Math.max(0,Math.sin(w*1.7+T.ph*3))**3*2.5;M[_*3]=1*x,M[_*3+1]=.9*x,M[_*3+2]=.35*x}),f.attributes.position.needsUpdate=!0,f.attributes.color.needsUpdate=!0})}let p=0;return{update(d){const v=Math.min(.05,Math.max(0,d-p));p=d;for(const M of u)M(v,d)}}}function lx(i,{cell:t=.75,ext:e=68}={}){const n=Math.ceil(e*2/t)+1,s=new Float64Array(n*n),r=new Float32Array(n*n),a=new Float32Array(n*n),o=i.lighthouse.pos,l=(w,T)=>[Math.round((w+e)/t),Math.round((T+e)/t)],c=(w,T)=>[-e+w*t,-e+T*t];let u=()=>!1;function h(){for(let w=0;w<n;w++)for(let T=0;T<n;T++){const[_,x]=c(T,w),C=i.heightAt(_,x),N=w*n+T,z=Math.hypot(_-o.x,x-o.z);let U=1.8;C<-.5||i.slopeAt(_,x)>1.1||i.extras.blocks(_,x)||u(_,x)||z<3.2?U=1/0:i.pathDist(_,x)<1.6?U=.2:C<.05&&(U=2.6),r[N]=U}}function p(){s.fill(1/0),a.fill(0);const w=[],T=(C,N)=>{w.push([C,N]);let z=w.length-1;for(;z>0;){const U=z-1>>1;if(w[U][0]<=w[z][0])break;[w[U],w[z]]=[w[z],w[U]],z=U}},_=()=>{const C=w[0],N=w.pop();if(w.length){w[0]=N;let z=0;for(;;){const U=2*z+1,O=U+1;let k=z;if(U<w.length&&w[U][0]<w[k][0]&&(k=U),O<w.length&&w[O][0]<w[k][0]&&(k=O),k===z)break;[w[k],w[z]]=[w[z],w[k]],z=k}}return C};for(let C=0;C<n;C++)for(let N=0;N<n;N++){const[z,U]=c(N,C),O=Math.hypot(z-o.x,U-o.z);O>=3.2&&O<4.2&&r[C*n+N]<1/0&&(s[C*n+N]=0,T(0,C*n+N))}const x=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;w.length;){const[C,N]=_();if(C>s[N])continue;const z=N%n,U=N/n|0;for(const[O,k,Y]of x){const B=z+O,K=U+k;if(B<0||K<0||B>=n||K>=n)continue;const at=K*n+B,ct=r[at];if(ct===1/0)continue;const vt=C+Y*t*(ct+r[N])*.5;vt<s[at]&&(s[at]=vt,a[at]=a[N]+Y*t,T(vt,at))}}}const d=(w,T)=>{const[_,x]=l(w,T);return _<0||x<0||_>=n||x>=n?1/0:s[x*n+_]};function v(w,T){const[_,x]=l(w,T);let C=d(w,T),N=0,z=0;for(let O=-1;O<=1;O++)for(let k=-1;k<=1;k++){if(!k&&!O)continue;const Y=_+k,B=x+O;if(Y<0||B<0||Y>=n||B>=n)continue;const K=s[B*n+Y];K<C&&(C=K,N=k,z=O)}const U=Math.hypot(N,z)||1;return[N/U,z/U,C]}const M=(w,T)=>{const[_,x]=l(w,T);return _<0||x<0||_>=n||x>=n?-1:x*n+_},m=(w,T)=>{const _=M(w,T);return _<0||s[_]===1/0?0:a[_]};function f(){const w=[];for(const T of i.paths){const _=T.samples.find(x=>i.heightAt(x.x,x.z)>-.4&&m(x.x,x.z)>0);_&&w.push([_.x,_.z])}return w}function y(w,T=22,{near:_=8,minFrac:x=.6}={}){const C=f(),N=Math.max(0,...C.map(([k,Y])=>m(k,Y))),z=(k,Y)=>{const B=i.heightAt(k,Y);return B>-.4&&B<.15&&[[4,0],[-4,0],[0,4],[0,-4],[3,3],[-3,3],[3,-3],[-3,-3]].some(([K,at])=>i.heightAt(k+K,Y+at)<-.9)},U=C.map(([k,Y])=>{const B=[],K=[],at=Math.ceil(_/t),[ct,vt]=l(k,Y);for(let et=-at;et<=at;et++)for(let ht=-at;ht<=at;ht++){const[xt,dt]=c(ct+ht,vt+et);Math.hypot(xt-k,dt-Y)>_||m(xt,dt)<x*N||(z(xt,dt)?B.push([xt,dt]):i.heightAt(xt,dt)>.3&&i.slopeAt(xt,dt)<.6&&K.push([xt,dt]))}return(B.length?B:K).sort(()=>Math.random()-.5)}).filter(k=>k.length).sort(()=>Math.random()-.5),O=[];for(let k=0;O.length<w&&k<4;k++){for(const Y of U){const B=Y.find(K=>O.every(at=>Math.hypot(at[0]-K[0],at[1]-K[1])>T));if(B&&O.push(B),O.length>=w)break}T=Math.min(T,6)}return O}let b=null;function g(w,T){if(!b){b=new Float32Array(n*n);for(let k=0;k<n;k++)for(let Y=0;Y<n;Y++){const[B,K]=c(Y,k);b[k*n+Y]=i.isWalkable(B,K)?i.heightAt(B,K)<.05?1.6:1:1/0}}const _=new Float64Array(n*n).fill(1/0),x=[],C=(k,Y)=>{x.push([k,Y]);let B=x.length-1;for(;B>0;){const K=B-1>>1;if(x[K][0]<=x[B][0])break;[x[K],x[B]]=[x[B],x[K]],B=K}},N=()=>{const k=x[0],Y=x.pop();if(x.length){x[0]=Y;let B=0;for(;;){const K=2*B+1,at=K+1;let ct=B;if(K<x.length&&x[K][0]<x[ct][0]&&(ct=K),at<x.length&&x[at][0]<x[ct][0]&&(ct=at),ct===B)break;[x[ct],x[B]]=[x[B],x[ct]],B=ct}}return k},z=M(w,T);if(z<0)return null;_[z]=0,C(0,z);const U=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;x.length;){const[k,Y]=N();if(k>_[Y])continue;const B=Y%n,K=Y/n|0;for(const[at,ct,vt]of U){const Xt=B+at,et=K+ct;if(Xt<0||et<0||Xt>=n||et>=n)continue;const ht=et*n+Xt,xt=b[ht];if(xt===1/0)continue;const dt=k+vt*t*xt;dt<_[ht]&&(_[ht]=dt,C(dt,ht))}}const O=(k,Y)=>{const B=M(k,Y);return B<0?1/0:_[B]};return{at:O,dir(k,Y){const[B,K]=l(k,Y);let at=O(k,Y),ct=0,vt=0;for(let et=-1;et<=1;et++)for(let ht=-1;ht<=1;ht++){if(!ht&&!et)continue;const xt=B+ht,dt=K+et;xt<0||dt<0||xt>=n||dt>=n||_[dt*n+xt]<at&&(at=_[dt*n+xt],ct=ht,vt=et)}const Xt=Math.hypot(ct,vt)||1;return[ct/Xt,vt/Xt]}}}const A=()=>{let w=0;for(const T of s)T<1/0&&T>w&&(w=T);return w},E=()=>{h(),p()};return E(),{at:d,dir:v,coastPoints:y,roadEnds:f,routeLen:m,walkField:g,rebuild:E,setBlock(w){u=w,E()},maxDist:A(),N:n,cell:t}}function yu(i,t=700,{blending:e=ri,size:n=.55,opacity:s=1,fadeTo:r=null}={}){const a=new wt(r||"#000000"),o=new Float32Array(t*3),l=new Float32Array(t*3),c=new Float32Array(t*3),u=new Float32Array(t*3),h=new Float32Array(t),p=new Float32Array(t),d=new Float32Array(t);let v=0;const M=new Re;M.setAttribute("position",new ze(o,3)),M.setAttribute("color",new ze(l,3));const m=document.createElement("canvas");m.width=m.height=64;const f=m.getContext("2d"),y=f.createRadialGradient(32,32,0,32,32,32);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(.4,"rgba(255,255,255,0.6)"),y.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=y,f.fillRect(0,0,64,64);const b=new za({size:n,map:new Fi(m),vertexColors:!0,transparent:!0,opacity:s,blending:e,depthWrite:!1}),g=new jl(M,b);g.frustumCulled=!1,i.add(g);for(let T=0;T<t;T++)o[T*3+1]=-999;const A=new wt;function E(T,_,x,{n:C=10,color:N="#ffb347",speed:z=4,up:U=3,life:O=.7,gravity:k=9,spread:Y=1}={}){A.set(N);for(let B=0;B<C;B++){const K=v;v=(v+1)%t,o[K*3]=T,o[K*3+1]=_,o[K*3+2]=x;const at=Math.random()*Math.PI*2,ct=z*(.4+Math.random()*.6)*Y;c[K*3]=Math.cos(at)*ct,c[K*3+1]=U*(.5+Math.random()),c[K*3+2]=Math.sin(at)*ct,u[K*3]=A.r,u[K*3+1]=A.g,u[K*3+2]=A.b,p[K]=h[K]=O*(.6+Math.random()*.6),d[K]=k}}function w(T){for(let _=0;_<t;_++){if(h[_]<=0)continue;if(h[_]-=T,h[_]<=0){o[_*3+1]=-999,l[_*3]=l[_*3+1]=l[_*3+2]=0;continue}c[_*3+1]-=d[_]*T,o[_*3]+=c[_*3]*T,o[_*3+1]+=c[_*3+1]*T,o[_*3+2]+=c[_*3+2]*T;const x=h[_]/p[_];l[_*3]=u[_*3]*x+a.r*(1-x),l[_*3+1]=u[_*3+1]*x+a.g*(1-x),l[_*3+2]=u[_*3+2]*x+a.b*(1-x)}M.attributes.position.needsUpdate=!0,M.attributes.color.needsUpdate=!0}return{emit:E,update:w}}const cx={xbox:{build:"Ⓐ",carry:"Ⓑ",next:"Ⓨ",sel:"LB/RB",pause:"☰",restart:"View",name:"Xbox"},ps:{build:"✕",carry:"○",next:"△",sel:"L1/R1",pause:"Options",restart:"Select",name:"PlayStation"},switch:{build:"A",carry:"B",next:"X",sel:"L/R",pause:"+",restart:"−",name:"Switch"}},hx={build:"B",carry:"E",next:"N",sel:"Z/X",pause:"Esc",restart:"R",name:"Tastatur"},ux={build:"Bygg",carry:"Bær",next:"Neste bølge",sel:"",pause:"⏸",restart:"⏸ → ↺",name:"Berøring"};function Sh(i=""){const t=i.toLowerCase();return/nintendo|pro controller|joy-con|joycon|057e/.test(t)?"switch":/playstation|dualshock|dualsense|wireless controller|054c|sony/.test(t)?"ps":"xbox"}function fx(i){const t=i==="switch";return{build:t?1:0,carry:t?0:1,next:3,prev:4,nextSel:5,zoomOut:6,zoomIn:7,pause:9,back:8}}function dx(i){const t=new Set,e={move:{x:0,z:0},look:0,lookDelta:0,zoom:1,pressed:new Set,clicks:[],device:matchMedia("(pointer: coarse)").matches?"touch":"kb",padKind:"xbox",padId:""},n=g=>e.pressed.add(g),s=g=>{e.device=g};addEventListener("keydown",g=>{if(s("kb"),(g.code==="Space"||g.code.startsWith("Arrow")||g.code==="Tab")&&g.preventDefault(),g.repeat)return;t.add(g.code);const A={KeyE:"carry",Space:"carry",KeyB:"build",Digit1:"b1",Digit2:"b2",Digit3:"b3",Numpad1:"b1",Numpad2:"b2",Numpad3:"b3",KeyZ:"selPrev",KeyX:"selNext",KeyQ:"selPrev",KeyR:"restart",KeyN:"next",Enter:"next",KeyF:"fps",KeyM:"music",Escape:"pause",KeyP:"pause"};A[g.code]&&n(A[g.code])}),addEventListener("keyup",g=>t.delete(g.code)),addEventListener("blur",()=>t.clear()),i.addEventListener("wheel",g=>{g.preventDefault(),s("kb"),e.zoom=fa(e.zoom*(g.deltaY>0?1.08:1/1.08),.55,4.5)},{passive:!1}),i.addEventListener("contextmenu",g=>g.preventDefault());const r=new Map;let a=0,o=1,l=null;const c=g=>({x:g.clientX/innerWidth*2-1,y:-(g.clientY/innerHeight)*2+1});i.addEventListener("pointerdown",g=>{if(s(g.pointerType==="touch"?"touch":"kb"),g.pointerType==="mouse"&&g.button===2){l={x:g.clientX},i.setPointerCapture(g.pointerId);return}g.pointerType==="mouse"&&g.button!==0||(r.set(g.pointerId,{e:g,t:performance.now(),x0:g.clientX,y0:g.clientY}),r.size===2&&(a=bh(r),o=e.zoom))}),i.addEventListener("pointermove",g=>{if(l){e.lookDelta+=(g.clientX-l.x)*.008,l.x=g.clientX;return}const A=r.get(g.pointerId);A&&(A.e=g,r.size===2&&a>0&&(e.zoom=fa(o*(a/bh(r)),.55,4.5)))});const u=g=>{if(l&&g.button===2){l=null;return}const A=r.get(g.pointerId);A&&r.size===1&&a===0&&Math.hypot(g.clientX-A.x0,g.clientY-A.y0)<12&&e.clicks.push(c(g)),r.delete(g.pointerId),r.size<2&&(a=0)};i.addEventListener("pointerup",u),i.addEventListener("pointercancel",g=>{r.delete(g.pointerId),l=null,a=0});const h=document.getElementById("stick"),p=document.getElementById("knob"),d={x:0,z:0};let v=null;const M=g=>{const A=h.getBoundingClientRect();let E=g.clientX-(A.left+A.width/2),w=g.clientY-(A.top+A.height/2);const T=A.width/2,_=Math.hypot(E,w);_>T&&(E*=T/_,w*=T/_),p.style.transform=`translate(${E}px, ${w}px)`;const x=_/T<.15?0:1;d.x=E/T*x,d.z=w/T*x};h.addEventListener("pointerdown",g=>{s("touch"),v=g.pointerId,h.setPointerCapture(g.pointerId),M(g)}),h.addEventListener("pointermove",g=>{g.pointerId===v&&M(g)});const m=g=>{g.pointerId===v&&(v=null,d.x=d.z=0,p.style.transform="")};h.addEventListener("pointerup",m),h.addEventListener("pointercancel",m);const f=(g,A)=>g.addEventListener("pointerdown",E=>{E.preventDefault(),E.stopPropagation(),E.pointerType==="touch"&&s("touch"),n(A)});f(document.getElementById("btn-build"),"build"),f(document.getElementById("btn-carry"),"carry"),f(document.getElementById("btn-next"),"next"),f(document.getElementById("btn-pause"),"pause"),document.querySelectorAll("#build-panel button").forEach((g,A)=>f(g,"b"+(A+1)));let y=[];addEventListener("gamepadconnected",g=>{e.padId=g.gamepad.id,e.padKind=Sh(g.gamepad.id)});function b(){const A=[...navigator.getGamepads?navigator.getGamepads():[]].find(U=>U&&U.connected);if(!A)return null;A.id!==e.padId&&(e.padId=A.id,e.padKind=Sh(A.id));const E=fx(e.padKind),w=A.buttons.map(U=>U.pressed||U.value>.5),T=U=>w[U]&&!y[U],_=U=>Math.abs(U)<.2?0:(U-Math.sign(U)*.2)/.8;let x=_(A.axes[0]||0),C=_(A.axes[1]||0);w[14]&&(x=-1),w[15]&&(x=1),w[12]&&(C=-1),w[13]&&(C=1);const N=_(A.axes[2]||0);return(x||C||N||w.some(Boolean))&&s("pad"),T(E.build)&&n("build"),T(E.carry)&&n("carry"),T(E.next)&&n("next"),T(E.prev)&&n("selPrev"),T(E.nextSel)&&n("selNext"),T(E.pause)&&n("pause"),T(E.back)&&n("restart"),T(2)&&e.padKind!=="switch"&&n("next"),y=w,{x,z:C,look:N,zoomIn:w[E.zoomIn],zoomOut:w[E.zoomOut]}}return e.update=g=>{let A=0,E=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(A-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(A+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(E-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(E+=1);const w=b();w&&(w.x||w.z)&&(A=w.x,E=w.z),(d.x||d.z)&&(A=d.x,E=d.z);const T=Math.hypot(A,E);T>1&&(A/=T,E/=T),e.move.x=A,e.move.z=E,e.look=e.lookDelta+(w?w.look*2.2*g:0),e.lookDelta=0,w!=null&&w.zoomIn&&(e.zoom=fa(e.zoom/(1+g*1.2),.55,4.5)),w!=null&&w.zoomOut&&(e.zoom=fa(e.zoom*(1+g*1.2),.55,4.5))},e.labels=()=>e.device==="pad"?cx[e.padKind]:e.device==="touch"?ux:hx,e.consume=g=>e.pressed.delete(g),e.clear=()=>{e.pressed.clear(),e.clicks.length=0},e}const fa=(i,t,e)=>Math.max(t,Math.min(e,i));function bh(i){const[t,e]=[...i.values()].map(n=>n.e);return Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY)||1}let Le=null,Os=null,Cr=null;function px(){if(Le){Le.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;Le=new i,Os=Le.createGain(),Os.gain.value=.5,Os.connect(Le.destination),Cr=Le.createBuffer(1,Le.sampleRate*2,Le.sampleRate);const t=Cr.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;mx()}const Su=()=>Le?{ctx:Le,noiseBuf:Cr}:null;function Oe(i,t,{type:e="sine",vol:n=.2,slide:s=0,delay:r=0}={}){if(!Le)return;const a=Le.currentTime+r,o=Le.createOscillator(),l=Le.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(30,i+s),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.01),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l).connect(Os),o.start(a),o.stop(a+t+.02)}function $i(i,{vol:t=.3,freq:e=800,q:n=.7,delay:s=0}={}){if(!Le)return;const r=Le.currentTime+s,a=Le.createBufferSource();a.buffer=Cr;const o=Le.createBiquadFilter();o.type="lowpass",o.frequency.value=e,o.Q.value=n;const l=Le.createGain();l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+i),a.connect(o).connect(l).connect(Os),a.start(r,Math.random()),a.stop(r+i+.02)}function mx(){const i=Le.createBufferSource();i.buffer=Cr,i.loop=!0;const t=Le.createBiquadFilter();t.type="lowpass",t.frequency.value=420;const e=Le.createGain();e.gain.value=.035;const n=Le.createOscillator(),s=Le.createGain();n.frequency.value=.12,s.gain.value=.03,n.connect(s).connect(e.gain),i.connect(t).connect(e).connect(Os),i.start(),n.start()}let wh=0;const Ge={pickup(){if(!Le)return;const i=Le.currentTime,t=i-wh<.4?1.12:1;wh=i,Oe(880*t+Math.random()*60,.12,{type:"triangle",vol:.12}),Oe(1320*t,.1,{type:"sine",vol:.06,delay:.04})},puff(){$i(.18,{vol:.07,freq:600,q:.3}),Oe(240,.12,{vol:.04,slide:-60})},crunch(){for(let i=0;i<4;i++)$i(.05,{vol:.1,freq:3500,delay:i*.03});Oe(130,.18,{vol:.08,slide:-40})},skank(){[[392,494,587],[349,440,523]][Math.random()<.5?0:1].forEach(i=>Oe(i,.11,{type:"square",vol:.025})),Oe(98,.3,{vol:.08})},chill(){Oe(330,.5,{type:"sine",vol:.07,slide:160}),Oe(495,.45,{type:"triangle",vol:.04,slide:120,delay:.08})},shoot(){Oe(520,.07,{type:"square",vol:.03,slide:-300})},mortar(){$i(.12,{vol:.12,freq:500}),Oe(160,.15,{type:"sine",vol:.12,slide:-80})},boom(){$i(.45,{vol:.28,freq:380}),Oe(90,.35,{vol:.18,slide:-50})},horn(){Oe(196,.5,{type:"sawtooth",vol:.035}),Oe(147,.55,{type:"sine",vol:.06})},hit(){$i(.05,{vol:.08,freq:2500})},die(){Oe(420,.18,{type:"triangle",vol:.09,slide:-280}),$i(.12,{vol:.07,freq:1200})},build(){[392,494,587].forEach((i,t)=>Oe(i,.25,{type:"triangle",vol:.1,delay:t*.06}))},upgrade(){[523,659,784,1047].forEach((i,t)=>Oe(i,.22,{type:"triangle",vol:.1,delay:t*.07}))},stone(){Oe(660,.2,{type:"sine",vol:.1,slide:200})},lose(){Oe(220,.6,{type:"sawtooth",vol:.06,slide:-120}),$i(.3,{vol:.08,freq:300})},stun(){Oe(700,.4,{type:"square",vol:.05,slide:-500})},deny(){Oe(150,.12,{type:"square",vol:.05})},wave(){[330,330,440].forEach((i,t)=>Oe(i,.3,{type:"sawtooth",vol:.04,delay:t*.18}))},win(){[523,659,784,1047,1319].forEach((i,t)=>Oe(i,.4,{type:"triangle",vol:.12,delay:t*.12}))}},El=172,xi=60/El/4,Zi=i=>440*Math.pow(2,(i-69)/12),Eh={tak:{chords:[[50,66,69,73,76],[47,62,66,69,74],[43,59,62,66,71],[45,61,64,69,73]],hook:[[0,78,3],[3,76,3],[6,73,2],[8,74,4],[14,71,2],[16,73,3],[19,74,3],[22,76,6],[28,69,4]],pad:"sawtooth",padCut:2400,arpOct:12,reeseDetune:9,drive:0,space:.35,arpRate:1,lead:"square"},vinter:{chords:[[45,60,64,71,76],[41,57,64,69,72],[48,64,67,72,79],[43,59,62,67,71]],hook:[[0,76,6],[6,74,2],[8,72,6],[16,71,4],[20,72,2],[22,74,4],[26,79,6]],pad:"triangle",padCut:1500,arpOct:24,reeseDetune:6,drive:0,space:.6,arpRate:2,lead:"triangle"},vulkan:{chords:[[40,55,59,64,67],[41,57,60,65,69],[40,55,59,64,71],[38,54,57,62,66]],hook:[[0,64,2],[2,65,2],[4,64,4],[10,62,2],[12,59,4],[16,64,2],[18,67,2],[20,65,4],[26,64,6]],pad:"sawtooth",padCut:900,arpOct:0,reeseDetune:16,drive:.6,space:.25,arpRate:1,lead:"sawtooth"}},Co={A:{k:"x.x.......xx....x.x.......x.....",s:"....x..x.x..x..x....x..x.x..x.x.",g:"..........x...........x.....x..."},B:{k:"x.....x...x.x...x.x...x...x.....",s:"....x.x..x..x.x.....x..xx..x..x.",g:".x.......x.....x.x.......x......"},FILL:{k:"x.x.......x.....x...............",s:"....x..x.x..x..x....x.xxxxxxxxxx",g:"................................"}},Th=[["build",8],["drop",16],["break",8],["drop",16]];function gx(i,t,e){const n=Eh[e]||Eh.tak,s=i.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=3,s.attack.value=.01,s.release.value=.2;const r=i.createDynamicsCompressor();r.threshold.value=-3,r.ratio.value=20,r.attack.value=.002,r.release.value=.08;const a=i.createGain();a.gain.value=0,s.connect(r).connect(a).connect(i.destination);const o=i.createAnalyser();o.fftSize=1024,a.connect(o);const l={};for(const j of["drums","bass","pad","arp","lead"]){const R=i.createGain();R.gain.value=0,R.connect(s),l[j]=R}const c={};for(const j of["pad","bass"]){const R=i.createGain();R.gain.value=1,R.connect(l[j]),c[j]=R}const u=(j,R)=>{const S=i.createBuffer(2,Math.floor(i.sampleRate*j),i.sampleRate);for(let G=0;G<2;G++){const $=S.getChannelData(G);for(let J=0;J<$.length;J++)$[J]=(Math.random()*2-1)*Math.pow(1-J/$.length,R)}return S},h=i.createConvolver();h.buffer=u(2.4,2.5);const p=i.createGain();p.gain.value=n.space,h.connect(p).connect(s);const d=i.createConvolver();d.buffer=u(.5,.4);const v=i.createGain();v.gain.value=0,d.connect(v).connect(l.drums);const M=i.createDelay(1);M.delayTime.value=xi*3;const m=i.createGain();m.gain.value=.38;const f=i.createBiquadFilter();f.type="lowpass",f.frequency.value=2400;const y=i.createStereoPanner(),b=i.createOscillator(),g=i.createGain();b.frequency.value=El/60/3,g.gain.value=.8,b.connect(g).connect(y.pan),b.start(),M.connect(f).connect(m).connect(M),f.connect(y).connect(l.arp);const A=i.createBiquadFilter();A.type="highpass",A.frequency.value=180;const E=i.createBiquadFilter();E.type="lowpass",E.frequency.value=n.padCut,E.Q.value=2;const w=i.createOscillator(),T=i.createGain();w.frequency.value=.07,T.gain.value=n.padCut*.45,w.connect(T).connect(E.frequency),w.start();const _=i.createDelay(.05);_.delayTime.value=.014;const x=i.createOscillator(),C=i.createGain();x.frequency.value=.5,C.gain.value=.004,x.connect(C).connect(_.delayTime),x.start();const N=i.createStereoPanner();N.pan.value=.6,A.connect(E),E.connect(c.pad),E.connect(_).connect(N).connect(c.pad),E.connect(h);const z=i.createBiquadFilter();z.type="lowpass",z.frequency.value=420,z.Q.value=6;const U=i.createOscillator(),O=i.createGain();if(U.frequency.value=El/60/4,O.gain.value=260,U.connect(O).connect(z.frequency),U.start(),n.drive>0){const j=i.createWaveShaper(),R=new Float32Array(1024);for(let S=0;S<1024;S++){const G=S/512-1;R[S]=Math.tanh(G*(1+n.drive*6))}j.curve=R,z.connect(j).connect(c.bass)}else z.connect(c.bass);const k=i.createBiquadFilter();k.type="lowpass",k.frequency.value=3600,k.Q.value=3,k.connect(l.lead),k.connect(M),k.connect(h);const Y=(j,R,S,G,$,J)=>{j.gain.setValueAtTime(1e-4,R),j.gain.exponentialRampToValueAtTime(G,R+S),j.gain.setValueAtTime(G,R+Math.max(S,J-$)),j.gain.exponentialRampToValueAtTime(1e-4,R+J)},B=(j,R)=>{const S=i.createStereoPanner();return S.pan.value=R,j.connect(S),S},K=(j,R,S,G,$,J,Q="bandpass",Et=0)=>{const pt=i.createBufferSource();pt.buffer=t;const Mt=i.createBiquadFilter();Mt.type=Q,Mt.frequency.value=S,Mt.Q.value=G;const Kt=i.createGain();Y(Kt,j,.001,$,R*.8,R),pt.connect(Mt).connect(Kt);const gt=Et?B(Kt,Et):Kt;for(const Ut of J)gt.connect(Ut);pt.start(j,Math.random()*1.5),pt.stop(j+R+.02)},at=(j,R=1)=>{const S=i.createOscillator(),G=i.createGain();S.frequency.setValueAtTime(160,j),S.frequency.exponentialRampToValueAtTime(44,j+.11),Y(G,j,.002,1*R,.2,.3),S.connect(G).connect(l.drums),S.start(j),S.stop(j+.32),K(j,.012,3500,.7,.35*R,[l.drums],"highpass");for(const $ of Object.values(c))$.gain.cancelScheduledValues(j),$.gain.setValueAtTime(.35,j),$.gain.linearRampToValueAtTime(1,j+.2)},ct=(j,R=1)=>{K(j,.17,1900,.8,.5*R,[l.drums,d]);for(const[S,G,$]of[[200,160,.3],[340,260,.14]]){const J=i.createOscillator(),Q=i.createGain();J.type="triangle",J.frequency.setValueAtTime(S,j),J.frequency.exponentialRampToValueAtTime(G,j+.08),Y(Q,j,.001,$*R,.06,.11),J.connect(Q).connect(l.drums),J.start(j),J.stop(j+.13)}v.gain.setValueAtTime(.9*R,j),v.gain.setValueAtTime(1e-4,j+.21)};let vt=1;const Xt=(j,R,S)=>{vt=-vt,K(j,S?.14:.035,9e3,.6,(S?.12:.08)*R,[l.drums],"highpass",vt*.35)},et=(j,R,S)=>{for(const J of[-n.reeseDetune,n.reeseDetune]){const Q=i.createOscillator(),Et=i.createGain();Q.type="sawtooth",Q.frequency.value=Zi(R),Q.detune.value=J,Y(Et,j,.02,.2,.1,S),B(Q.connect(Et),J>0?.25:-.25).connect(z),Q.start(j),Q.stop(j+S+.05)}const G=i.createOscillator(),$=i.createGain();G.frequency.value=Zi(R-12),Y($,j,.02,.42,.1,S),G.connect($).connect(c.bass),G.start(j),G.stop(j+S+.05)},ht=(j,R,S,G=1)=>{for(const $ of R.slice(1))for(const[J,Q]of[[-9,-.6],[0,0],[8,.6]]){const Et=i.createOscillator(),pt=i.createGain();Et.type=n.pad,Et.frequency.value=Zi($),Et.detune.value=J,Y(pt,j,.8,.026*G,1.4,S),B(Et.connect(pt),Q).connect(A),Et.start(j),Et.stop(j+S+.1)}},xt=(j,R,S=1)=>{const G=i.createOscillator(),$=i.createGain();G.type="square",G.frequency.value=Zi(R+n.arpOct);const J=i.createBiquadFilter();J.type="lowpass",J.frequency.value=3200,Y($,j,.003,.05*S,.08,xi*1.6),G.connect(J).connect($),$.connect(l.arp),$.connect(M),G.start(j),G.stop(j+xi*2)},dt=(j,R,S,G)=>{const $=S*xi;for(const J of[-6,6]){const Q=i.createOscillator(),Et=i.createGain();Q.type=n.lead,G?(Q.frequency.setValueAtTime(Zi(G),j),Q.frequency.exponentialRampToValueAtTime(Zi(R),j+.05)):Q.frequency.value=Zi(R),Q.detune.value=J;const pt=i.createOscillator(),Mt=i.createGain();pt.frequency.value=5.5,Mt.gain.value=9,pt.connect(Mt).connect(Q.detune),pt.start(j+.12),pt.stop(j+$+.05),Y(Et,j,.01,.07,Math.min(.12,$*.4),$),B(Q.connect(Et),J>0?.2:-.2).connect(k),Q.start(j),Q.stop(j+$+.05)}};let Lt=0,Ft=0,Wt=null,ce=0,Qt=.7,pe=!1,W=0;const Ee=Th.reduce((j,[,R])=>j+R,0),te=()=>{if(ce<.5)return"ambient";let j=W%Ee;for(const[R,S]of Th){if(j<S)return R;j-=S}return"drop"},$t=()=>{const j=i.currentTime,R=(G,$)=>{G.gain.cancelScheduledValues(j),G.gain.setTargetAtTime($,j,.8)},S=ce;R(l.drums,.1+.85*S),R(l.bass,.3+.6*S),R(l.pad,.75-.2*S),R(l.arp,.35+.3*S),R(l.lead,.55+.35*S),a.gain.cancelScheduledValues(j),a.gain.setTargetAtTime(pe?0:Qt*.8,j,.3)},Ot=j=>j%2?xi*.12:0,he=()=>{for(;Ft<i.currentTime+.15;){const j=Lt%32,R=Math.floor(Lt/16),S=Math.floor(Lt/32)%n.chords.length,G=n.chords[S];j%16===0&&Lt>0&&ce>.5&&W++;const $=te(),J=Ft+Ot(j),Q=W%8;if($==="drop"||$==="build"){const pt=Q%4===3&&j>=16?Co.FILL:Q>=6?Co.B:Co.A,Mt=$==="build"&&Q<4;pt.k[j]==="x"&&!(Mt&&j%8)&&at(J),pt.s[j]==="x"&&!Mt&&ct(J,$==="build"?.7:1),pt.g[j]==="x"&&ct(J,.3),(!Mt||j%2===0)&&Xt(J,j%2?.6:1,j%8===6)}else $==="break"?(j%4===2&&Xt(J,.6,!1),(j===0||j===16)&&at(J,.4)):j%4===2&&Xt(J,.45,!1);if(j===0&&(ht(J,G,xi*32,$==="break"?1.3:1),et(J,G[0],xi*($==="drop"?14:30))),$==="drop"&&j===16&&et(J,G[0]+(S%2?3:7),xi*14),j%n.arpRate===0&&$!=="break"&&xt(J,G[1+j/n.arpRate%4]+(j>=16?12:0),$==="ambient"?.7:1),$==="drop"||($==="break"||$==="ambient")&&Math.floor(R/4)%2===1){const pt=n.hook.findIndex(([Mt])=>Mt===j);if(pt>=0){const[,Mt,Kt]=n.hook[pt];dt(J,Mt+($==="ambient"?-12:0),Kt,pt>0?n.hook[pt-1][1]:0)}}Ft+=xi,Lt++}};return{start(){Wt||(Ft=i.currentTime+.1,Wt=setInterval(he,25),$t())},stop(){clearInterval(Wt),Wt=null,a.gain.setTargetAtTime(0,i.currentTime,.2)},setIntensity(j){j>.5&&ce<=.5&&(W=0),ce=j,$t()},setVolume(j){Qt=j,$t()},setMuted(j){pe=j,$t()},get muted(){return pe},get volume(){return Qt},rms(){const j=new Float32Array(o.fftSize);return o.getFloatTimeDomainData(j),Math.sqrt(j.reduce((R,S)=>R+S*S,0)/j.length)},get intensity(){return ce},get section(){return te()},tap(j){a.connect(j)}}}const de={startEmbers:225,emberLife:25,expiredRefund:.5,magnet:4.6,reach:2.7,placeAhead:2.3,minTowerGap:2.5,plinthBonus:1.25,lighthouseReach:5.4,stoneCost:30,chargeTime:1.2,keeperSpeed:6.4,carrySlow:.82,wadeSlow:.7,stunTime:1.6,stunLoss:.3,hpGrowth:.2,waveBonus:20,waveBonusPer:5,interest:.1,firstPrep:30,prepTime:15,earlyScale:[.55,.65,.8]},Ra={ring:{name:"Røykring-kanon",cost:22,range:7.5,dmg:7,cooldown:.65,air:!0},chips:{name:"Chips-mørtel",cost:38,range:10,dmg:18,cooldown:2.2,air:!1,splash:2.5},speaker:{name:"Reggae-høyttaler",cost:30,range:5.5,dmg:3,cooldown:1.6,air:!0,slowTime:2.2}},bu={clerk:{name:"Forbuds-byråkrat",hp:22,speed:2.6,embers:4,anim:12,puff:"#9fffb0"},tank:{name:"Stortings-tanken",hp:95,speed:1.25,embers:10,anim:5,puff:"#9fffb0"},gull:{name:"Moralpanikk-måke",hp:16,speed:3.4,embers:5,anim:12,puff:"#ffffff",flying:!0},swarm:{name:"Komité-sverm",hp:7,speed:2.2,embers:1,anim:9,puff:"#ffe08a"}},vx=[[{type:"clerk",n:8,gap:1.4,path:0}],[{type:"clerk",n:6,gap:1.3,path:"both"}],[{type:"swarm",n:7,gap:.35,path:1},{type:"clerk",n:6,gap:1.2,path:0,at:4},{type:"swarm",n:7,gap:.35,path:0,at:12}],[{type:"tank",n:3,gap:4,path:0},{type:"clerk",n:6,gap:1,path:1,at:2}],[{type:"gull",n:5,gap:2.5},{type:"clerk",n:7,gap:1,path:"both",at:3}],[{type:"tank",n:3,gap:3.5,path:"both"},{type:"swarm",n:8,gap:.3,path:"both",at:8}],[{type:"gull",n:8,gap:1.6},{type:"clerk",n:9,gap:.8,path:"both",at:2}],[{type:"tank",n:4,gap:3,path:"both"},{type:"swarm",n:10,gap:.3,path:"both",at:6},{type:"gull",n:4,gap:2,at:10}],[{type:"gull",n:10,gap:1.2},{type:"tank",n:4,gap:3,path:"both",at:3},{type:"clerk",n:10,gap:.7,path:"both",at:8}],[{type:"clerk",n:10,gap:.6,path:"both"},{type:"tank",n:5,gap:2.5,path:"both",at:6},{type:"swarm",n:12,gap:.25,path:"both",at:14},{type:"gull",n:12,gap:1,at:18}]],mn=new URLSearchParams(location.search),wu=mn.has("demo");if(mn.has("unlockall"))try{localStorage.setItem("glod-unlocked",String(Qs.length))}catch{}let pn=Number(mn.get("world"));if(!Number.isInteger(pn))try{pn=Number(localStorage.getItem("glod-world"))||0}catch{pn=0}pn=Math.max(0,Math.min(Ar()-1,pn));try{localStorage.setItem("glod-world",String(pn))}catch{}const He=Qs[pn],Eu=Rv(He,vx);function xx(){return 1}const _x=Math.max(1,Math.min(20,Number(mn.get("speed"))||1)),Gi=matchMedia("(pointer: coarse)").matches||mn.has("mobile"),Tl={high:{shadow:2048,dprCap:2},low:{shadow:1024,dprCap:1.25}};let ci=Gi?"low":"high";try{const i=localStorage.getItem("glod-quality");(i==="high"||i==="low")&&(ci=i)}catch{}(mn.get("q")==="high"||mn.get("q")==="low")&&(ci=mn.get("q"));const Rr={mobile:Gi,shadow:Tl[ci].shadow,dprCap:Tl[ci].dprCap},Tu=document.getElementById("game"),Cn=new qg({canvas:Tu,antialias:!Gi,powerPreference:"high-performance",preserveDrawingBuffer:mn.has("shot")});let ns=Math.min(devicePixelRatio||1,Rr.dprCap);Cn.setPixelRatio(ns);Cn.shadowMap.enabled=!0;Cn.shadowMap.type=Uh;Cn.toneMapping=Ll;let ss="dag";try{ss=localStorage.getItem("glod-tid")||"dag"}catch{}mn.get("tid")&&(ss=mn.get("tid"));const zn=ss==="skumring"&&He.skyDusk?He.skyDusk:He.sky;Cn.toneMappingExposure=zn.exposure;Cn.info.autoReset=!1;const we=new Yg,Au=new wt(zn.fog);we.background=Au;we.fog=new Yl(Au,...He.fog??[55,115]);const Ye=new Tn(38,1,.5,200),Mx=new hv(zn.hemiSky,zn.hemiGround,zn.hemi);we.add(Mx);const je=new dv(zn.sun,zn.sunI);je.castShadow=!0;je.shadow.mapSize.set(Rr.shadow,Rr.shadow);Object.assign(je.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90});je.shadow.bias=-8e-4;je.shadow.normalBias=.03;we.add(je,je.target);const Vt=Nv(we,Rr,He);Vt.grass.setLevel(ci);const yx=ox(we,Vt,Rr,He,ss),Mn=lx(Vt);window.__nav=Mn;const Qe=yu(we,Gi?450:800),Pr=yu(we,Gi?120:220,{blending:Oi,size:1.6,opacity:.45,fadeTo:zn.fog}),Va=ax(Cn,we,Ye,zn.grade);Va.setLevel(ci);const ie=dx(Tu);function Ga(){const i=innerWidth,t=innerHeight;Cn.setSize(i,t,!1),Ye.aspect=i/t,Ye.updateProjectionMatrix(),Va.setSize(i,t)}function Cu(i){ci=i;try{localStorage.setItem("glod-quality",i)}catch{}const t=Tl[i];je.shadow.mapSize.set(t.shadow,t.shadow),je.shadow.map&&(je.shadow.map.dispose(),je.shadow.map=null),ns=Math.min(devicePixelRatio||1,t.dprCap),Cn.setPixelRatio(ns),Va.setLevel(i),Vt.grass.setLevel(i),Ga(),document.getElementById("btn-quality").textContent=i==="high"?"Høy":"Lav"}addEventListener("resize",Ga);Ga();const rt={phase:"title",wave:0,timer:0,embers:de.startEmbers,lights:Dn,spawnQueue:[],leaks:{},time:0,sel:0,paused:!1},da=["ring","chips","speaker"];let Mi=He.camYaw??0;const Ah=new pv,Nn=[],Zn=[],Bs=[],is=[],ks=[],Mr=[],On=Fv(),st={x:Vt.lighthouse.pos.x+1,z:Vt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,walk:0,charge:0,chargeTower:null,face:Math.PI,goal:null};On.position.set(st.x,Vt.heightAt(st.x,st.z),st.z);we.add(On);const ec=new Tr("#ffcf70",6,7,1.8);ec.position.set(.5,1.1,0);On.add(ec);const ae=i=>document.getElementById(i),on={lights:ae("hud-lights"),embers:ae("hud-embers"),wave:ae("hud-wave"),timer:ae("hud-timer")},Ns=ae("hint"),zi=ae("build-panel"),nc=ae("btn-next"),ic=ae("fps");mn.has("debug")||ic.classList.add("hidden");let Ei={};function Kn(i,t,e,n){Ei[t]!==e&&(Ei[t]=e,i.querySelector("b").textContent=e,n&&(i.classList.remove(n),i.offsetWidth,i.classList.add(n)))}const Sx=4;let Ru=0;function Ch(i){if(Ns.textContent===i)return;Ns.textContent=i,Ru=0,Ns.classList.remove("faded");const t=zi.classList.contains("hidden")?null:zi.getBoundingClientRect();Ns.style.bottom=t&&t.height?`${Math.round(innerHeight-t.top+6)}px`:""}function bx(i){(Ru+=i)>Sx&&Ns.classList.add("faded")}function Pu(i){rt.phase="prep",rt.timer=i,nc.classList.remove("hidden"),wx()}function wx(){const i=rt.wave+1,t=i===1?1:i<=3?2:2+Math.floor(Math.random()*3);rt.spawnPoints=Mn.coastPoints(t,24),rt.spawnPoints.length||(rt.spawnPoints=Mn.coastPoints(t,8,{near:12,minFrac:.5})),rt.spawnPoints.length||(rt.spawnPoints=Mn.roadEnds().slice(0,t)),Ax()}function Du(){rt.wave+=1,rt.phase="wave",nc.classList.add("hidden"),rt.spawnQueue=[];for(const i of Eu[rt.wave-1]){const t=rt.wave<=de.earlyScale.length?rt.wave-1:-1,e=rt.spawnPoints.length,n=bu[i.type].flying?He.balance.air??1:1,s=Math.max(1,Math.round(i.n*(He.balance.count||1)*n*(t>=0?de.earlyScale[t]:1)));if(i.path==="both"){const r=Math.ceil(s/Math.min(2,e));for(let a=0;a<e;a++)for(let o=0;o<r;o++)rt.spawnQueue.push({t:(i.at??0)+o*i.gap+a*.3,type:i.type,path:a})}else{const r=i.path??0;for(let a=0;a<s;a++)rt.spawnQueue.push({t:(i.at??0)+a*i.gap,type:i.type,path:(r+a%2)%e})}}rt.spawnQueue.sort((i,t)=>i.t-t.t),rt.waveClock=0,Ge.wave(),Se==null||Se.setIntensity(1),Kn(on.wave,"wave",rt.wave,"bump")}function Ex(i,t){var l,c;const e=bu[i],n=zv(i),s=e.hp*(1+de.hpGrowth*(rt.wave-1))*He.balance.hp*(((c=(l=He.balance.types)==null?void 0:l[i])==null?void 0:c.hp)??1)*xx(),r={type:i,def:e,mesh:n,hp:s,maxHp:s,slow:0,phase:Math.random()*6,alive:!0,speedMul:He.balance.speed*(e.flying?He.balance.airSpeed??1:1),lane:(Math.random()-.5)*1.4},a=rt.spawnPoints[t%rt.spawnPoints.length]||[0,50],o=Vt.lighthouse.pos;if(e.flying){const u=Math.atan2(a[1]-o.z,a[0]-o.x)+(Math.random()-.5)*.5,h=o.x+Math.cos(u)*66,p=o.z+Math.sin(u)*66;r.x=h,r.z=p,r.y=4,r.dist0=Math.hypot(o.x-h,o.z-p),r.hitCd=0}else r.x=a[0]+(Math.random()-.5)*1.5,r.z=a[1]+(Math.random()-.5)*1.5,r.y=Vt.heightAt(r.x,r.z),r.remain=Mn.at(r.x,r.z);n.position.set(r.x,r.y,r.z),we.add(n),Nn.push(r)}function Tx(i){return i.def.flying?1-Math.hypot(Vt.lighthouse.pos.x-i.x,Vt.lighthouse.pos.z-i.z)/i.dist0:1-Math.min(1,(i.remain??Mn.maxDist)/Mn.maxDist)}const Ta=[],Dr=document.createElement("div");Dr.id="warn";document.body.appendChild(Dr);function Ax(){for(const i of Ta)we.remove(i);Ta.length=0,Dr.innerHTML="";for(const[i,t]of rt.spawnPoints){const e=new Jt(Lu,new be({color:"#ff7a3a",transparent:!0,opacity:.8,depthWrite:!1}));e.position.set(i,Math.max(Vt.heightAt(i,t),.08)+.1,t);const n=new Jt(Cx,new be({color:"#ff8a3a",transparent:!0,opacity:.35,blending:ri,depthWrite:!1,fog:!1}));n.position.y=4,e.add(n),we.add(e),Ta.push(e);const s=document.createElement("div");s.className="warn-arrow",s.textContent="➤",Dr.appendChild(s)}}const Lu=new fs(1.6,2.2,32);Lu.rotateX(-Math.PI/2);const Cx=new Pe(.5,1.4,8,12,1,!0);function Rx(){var e;const i=rt.phase==="prep"||rt.phase==="wave"&&rt.waveClock<8,t=Dr.children;(e=rt.spawnPoints)==null||e.forEach(([n,s],r)=>{const a=Ta[r],o=t[r];if(!a||!o)return;a.visible=i;const l=.5+.5*Math.sin(rt.time*6);a.scale.setScalar(1+l*.35),a.material.opacity=.35+.5*l,Ln.set(n,a.position.y,s).project(Ye);const c=Math.abs(Ln.x)>.92||Math.abs(Ln.y)>.88||Ln.z>1;if(o.style.display=i&&c?"block":"none",i&&c){let u=Ln.x,h=Ln.y;Ln.z>1&&(u=-u,h=-h);const p=Math.atan2(-h,u),d=Math.max(Math.abs(u),Math.abs(h))||1,v=Ie.clamp(u/d,-1,1),M=Ie.clamp(h/d,-1,1);o.style.left=`${(v*.46+.5)*innerWidth}px`,o.style.top=`${(-M*.44+.5)*innerHeight}px`,o.style.transform=`translate(-50%, -50%) rotate(${p}rad) scale(${1+l*.25})`}})}function Al(i,t){i.alive&&(i.hp-=t,i.mesh.userData.hpBar.visible=!0,i.hp<=0&&Px(i))}function Px(i){i.alive=!1,i.chillT=0,Ov(i),Mr.push(i),Qe.emit(i.x,i.y+1.2,i.z,{n:12,color:i.def.puff,speed:1.6,up:2.2,life:.9,gravity:1.5}),Ge.chill(),Uu(i.x,i.y+.5,i.z,i.def.embers,i.def.flying)}function Dx(i){for(let t=Mr.length-1;t>=0;t--){const e=Mr[t];e.chillT+=i;const n=e.chillT,s=e.mesh.userData.body;if(e.def.flying)e.y+=i*2.5,e.z+=i*3,e.mesh.userData.wings.forEach((a,o)=>a.rotation.z=Math.sin(n*6)*.5*(o?-1:1));else if(n<1.4){const a=Math.min(1,n/.4);s.position.y=-.25*a*(e.type==="tank"?1.3:1),s.rotation.x=.25*a,s.rotation.z=Math.sin(n*3)*.05}else{s.rotation.x=0,s.position.y=Math.abs(Math.sin(n*7))*.06;const[a,o]=Mn.dir(e.x,e.z),l=e.x-a*e.def.speed*.45*i,c=e.z-o*e.def.speed*.45*i;Vt.isWalkable(l,c)&&(e.x=l,e.z=c),e.y=Vt.heightAt(e.x,e.z),(a||o)&&(e.mesh.rotation.y=Math.atan2(a,o))}Math.random()<i*1.5&&Qe.emit(e.x,e.y+1.8,e.z,{n:1,color:"#c8ffb0",speed:.3,up:1,life:.8,gravity:-.4});const r=Math.max(0,Math.min(1,(3.2-n)/.6));e.mesh.scale.setScalar(r),e.mesh.position.set(e.x,e.y,e.z),n>3.2&&(we.remove(e.mesh),Mr.splice(t,1))}}function Uu(i,t,e,n,s=!1,r=1){const a=Math.min(n,n>=6?3:n>=3?2:1);let o=n;for(let l=0;l<a;l++){const c=l===a-1?o:Math.ceil(n/a);o-=c;const u=kv(),h=Math.random()*Math.PI*2,p=(1.2+Math.random()*1.8)*r,d={mesh:u,x:i,y:t,z:e,vx:Math.cos(h)*p,vz:Math.sin(h)*p,vy:5+Math.random()*2,life:de.emberLife,value:c,settled:!1,phase:Math.random()*6};u.scale.setScalar(.8+Math.min(c,6)*.08),we.add(u),is.push(d)}}function Pa(i,t,e,n,s=()=>!0){let r=null,a=n;for(const o of i){if(!s(o))continue;const l=Math.hypot(o.x-t,o.z-e);l<a&&(a=l,r=o)}return r}function sc(){const i=Pa(Vt.plinths,st.x,st.z,de.reach,l=>!l.tower);if(i)return{x:i.x,z:i.z,y:i.y,plinth:i,ok:!0};const t=-Math.sin(st.face),e=-Math.cos(st.face),n=st.x+t*de.placeAhead,s=st.z+e*de.placeAhead,r=Vt.heightAt(n,s),a=Vt.lighthouse.pos;let o="";return r<.35?o="i vannet":Vt.extras.blocks(n,s)?o="i lavaen":Vt.pathDist(n,s)<1.9?o="på stien":Vt.slopeAt(n,s)>.6?o="for bratt":Math.hypot(n-a.x,s-a.z)<5.5?o="for nær fyret":Zn.some(l=>Math.hypot(l.x-n,l.z-s)<de.minTowerGap)?o="for nær et annet tårn":Vt.plinths.some(l=>Math.hypot(l.x-n,l.z-s)<1.9)?o="oppå en sokkel (gå helt bort til den)":Vt.colliders.some(l=>!l.tower&&(l.x-n)**2+(l.z-s)**2<(l.r+.7)**2)&&(o="i veien for et tre eller en stein"),{x:n,z:s,y:r,plinth:null,ok:!o,why:o}}function Cl(i){const t=sc();if(!t.ok){Ge.deny(),An(`Ikke lov å bygge her: ${t.why}`);return}const e=Ra[i];if(rt.embers<e.cost){Ge.deny(),An(`Trenger ${e.cost} ✦ glør`),Kn(on.embers,"embersBad",Math.random(),"bad");return}rt.embers-=e.cost;const n=Bv(i);if(n.position.set(t.x,t.y,t.z),!t.plinth){const r=new Jt(Lx,Ux);r.position.y=.04,r.receiveShadow=!0,n.add(r)}we.add(n);const s={type:i,def:e,mesh:n,x:t.x,z:t.z,y:t.y,level:1,cd:.3,plinth:t.plinth,onPlinth:!!t.plinth};t.plinth&&(t.plinth.tower=s),Zn.push(s),Vt.colliders.push({x:t.x,z:t.z,r:1,tower:s}),Qe.emit(t.x,t.y+.3,t.z,{n:24,color:"#ffe3a0",speed:4,up:3,life:.8,gravity:5}),Ge.build(),rt.buildMode=!1,t.plinth&&An(`${e.name} på gammel sokkel: +25 % rekkevidde`)}const Lx=new Pe(.95,1.05,.12,10),Ux=new Fe({color:"#8a8478"}),yi=new Me;{const i=new Jt(new qs(1,24),new be({transparent:!0,opacity:.35,depthWrite:!1}));i.rotation.x=-Math.PI/2;const t=new fs(.965,1,64);t.rotateX(-Math.PI/2);const e=new Jt(t,new be({transparent:!0,opacity:.6,depthWrite:!1})),n=new Jt(new Pe(.55,.7,1.6,10),new be({transparent:!0,opacity:.25,depthWrite:!1}));n.position.y=.8,yi.add(i,e,n),yi.userData={disc:i,ring:e,pillar:n},yi.visible=!1,yi.renderOrder=20,we.add(yi)}function Ix(i,t,e){if(yi.visible=i,!i)return;const n=t.ok,s=n?t.plinth?"#9fffb0":"#7be06a":"#ff5a4a",r=Ra[e].range*(t.plinth?de.plinthBonus:1);yi.position.set(t.x,t.y+.06,t.z);const a=yi.userData;for(const o of[a.disc,a.ring,a.pillar])o.material.color.set(s);a.ring.scale.setScalar(r),a.ring.visible=n,a.pillar.visible=!t.plinth}const hr=(i,t)=>{const e=i.level-1;return t==="range"?i.def.range*(1+.12*e)*(i.onPlinth?de.plinthBonus:1):t==="dmg"?i.def.dmg*[1,1.7,2.6][e]:t==="rate"?i.def.cooldown/(1+.15*e):i.def[t]};function Nx(i){for(const t of Zn){t.cd-=i;const e=hr(t,"range");let n=null,s=-1;for(const c of Nn){if(!c.alive||c.def.flying&&!t.def.air||Math.hypot(c.x-t.x,c.z-t.z)>e)continue;const u=Tx(c);u>s&&(s=u,n=c)}const r=t.mesh.userData.head;if(t.type==="speaker"){const c=Math.max(0,Math.sin(rt.time*7.3));r.rotation.z=Math.sin(rt.time*3.65)*.05,t.mesh.userData.woofers.forEach(u=>u.scale.set(1+c*.15,1,1+c*.15)),n&&(r.rotation.y+=Rl(Math.atan2(-(n.x-t.x),-(n.z-t.z)),r.rotation.y)*Math.min(1,i*3))}else if(n){const c=Math.atan2(-(n.x-t.x),-(n.z-t.z));r.rotation.y+=Rl(c,r.rotation.y)*Math.min(1,i*10)}if(!n||t.cd>0)continue;t.cd=hr(t,"rate");const a=t.x,o=t.y+1.4*t.mesh.scale.y,l=t.z;if(t.type==="ring"){const c=Vv();c.position.set(a,o-.3,l),we.add(c),Bs.push({kind:"bolt",mesh:c,target:n,dmg:hr(t,"dmg"),tx:n.x,ty:n.y,tz:n.z,age:0}),Ge.puff()}else if(t.type==="chips"){const c=Gv();c.position.set(a,t.y+1,l),we.add(c);const[u,h]=n.def.flying?[0,0]:Mn.dir(n.x,n.z),p=n.x+u*n.def.speed*.6,d=n.z+h*n.def.speed*.6;Bs.push({kind:"shell",mesh:c,sx:a,sy:t.y+1,sz:l,ex:p,ez:d,ey:Vt.heightAt(p,d),t:0,dur:.95,dmg:hr(t,"dmg"),splash:t.def.splash*(1+.1*(t.level-1))}),Qe.emit(a,t.y+1.3,l,{n:6,color:"#d8d0c0",speed:1,up:2,life:.5,gravity:-1}),Ge.mortar()}else if(t.type==="speaker"){for(const u of Nn)!u.alive||Math.hypot(u.x-t.x,u.z-t.z)>e||(u.slow=t.def.slowTime,Al(u,hr(t,"dmg")));const c=_u();c.position.set(t.x,t.y+.3,t.z),we.add(c),ks.push({mesh:c,t:0,r:e}),Qe.emit(t.x,t.y+1.8,t.z,{n:6,color:["#7be06a","#f2c94c","#ff7a5a"][Math.floor(Math.random()*3)],speed:2.2,up:1.6,life:.9,gravity:.5}),Ge.skank()}}}function Fx(i){for(let t=Bs.length-1;t>=0;t--){const e=Bs[t];let n=!1;if(e.kind==="bolt"){e.target.alive&&(e.tx=e.target.x,e.ty=e.target.y+(e.target.def.flying?0:.5),e.tz=e.target.z);const s=e.mesh.position,r=e.tx-s.x,a=e.ty-s.y,o=e.tz-s.z,l=Math.hypot(r,a,o),c=18*i;e.age+=i,e.mesh.lookAt(e.tx,e.ty,e.tz),e.mesh.scale.setScalar(.7+e.age*2.2),l<=c+.3?(n=!0,e.target.alive&&(Al(e.target,e.dmg),Pr.emit(e.tx,e.ty+.3,e.tz,{n:3,color:"#f4f0ea",speed:1,up:.8,life:.8,gravity:-.6}),Ge.hit())):s.set(s.x+r/l*c,s.y+a/l*c,s.z+o/l*c)}else if(e.kind==="shell"){e.t+=i/e.dur;const s=Math.min(1,e.t);if(e.mesh.position.set(e.sx+(e.ex-e.sx)*s,e.sy+(e.ey-e.sy)*s+Math.sin(Math.PI*s)*5,e.sz+(e.ez-e.sz)*s),e.mesh.rotation.set(s*9,s*5,0),e.t>=1){n=!0;for(const r of Nn){if(!r.alive||r.def.flying)continue;const a=Math.hypot(r.x-e.ex,r.z-e.ez);a<e.splash&&Al(r,e.dmg*(a<e.splash*.4?1:.6))}Qe.emit(e.ex,e.ey+.3,e.ez,{n:26,color:"#ffd060",speed:5,up:5,life:.7,gravity:12}),Pr.emit(e.ex,e.ey+.3,e.ez,{n:4,color:"#f6e7c0",speed:1.5,up:1,life:.8,gravity:-.3}),Ge.crunch(),Un=Math.max(Un,.12)}}n&&(we.remove(e.mesh),Bs.splice(t,1))}for(let t=ks.length-1;t>=0;t--){const e=ks[t];e.t+=i/(e.dur||.6),e.mesh.scale.setScalar(.5+e.t*e.r),e.mesh.material.opacity=.7*(1-e.t),e.t>=1&&(we.remove(e.mesh),e.mesh.material.dispose(),ks.splice(t,1))}}function zx(i){for(const t of Nn){if(!t.alive)continue;t.phase+=i*t.def.anim;const e=t.slow>0?.5:1;t.slow-=i;const n=t.def.speed*e*(t.speedMul||1),s=t.mesh.userData.body;if(t.def.flying){const a=Vt.lighthouse.pos;let o=a.x-t.x,l=a.z-t.z;const c=Math.hypot(st.x-t.x,st.z-t.z);let u=4.2;if(c<6&&st.stun<=0&&t.hitCd<=0){const d=Math.hypot(o,l);o=o/d*.5+(st.x-t.x)/c*.9,l=l/d*.5+(st.z-t.z)/c*.9,u=1.5}t.hitCd-=i;const h=Math.hypot(o,l)||1;t.x+=o/h*n*i,t.z+=l/h*n*i;const p=Math.max(Vt.heightAt(t.x,t.z),0);t.y+=(p+u-t.y)*Math.min(1,i*2.5),t.mesh.rotation.y=Math.atan2(-o,-l),t.mesh.userData.wings.forEach((d,v)=>d.rotation.z=Math.sin(t.phase)*.7*(v?-1:1)),s.position.y=Math.sin(t.phase*.5)*.15,c<1.3&&Math.abs(t.y-On.position.y-1)<1.4&&st.stun<=0&&t.hitCd<=0&&Ox(t),Math.hypot(a.x-t.x,a.z-t.z)<3.4&&Rh(t)}else{const[a,o,l]=Mn.dir(t.x,t.z);t.remain=l;const c=Vt.lighthouse.pos,u=Math.hypot(c.x-t.x,c.z-t.z);if(u<4.3||l<.6){Rh(t);continue}let h=a,p=o;!h&&!p&&(h=(c.x-t.x)/u,p=(c.z-t.z)/u),t.hx=(t.hx||0)+(h-(t.hx||0))*Math.min(1,i*6),t.hz=(t.hz||0)+(p-(t.hz||0))*Math.min(1,i*6);const d=Math.hypot(t.hx,t.hz)||1,v=t.lane*Math.min(1,u/10);t.x+=t.hx/d*n*i+-t.hz/d*v*i*.5,t.z+=t.hz/d*n*i+t.hx/d*v*i*.5,t.y=Vt.heightAt(t.x,t.z),t.mesh.rotation.y=Math.atan2(-t.hx,-t.hz),t.type==="clerk"?(s.position.y=Math.abs(Math.sin(t.phase))*.12,s.rotation.z=Math.sin(t.phase)*.06,t.mesh.userData.arm.position.y=.9+Math.max(0,Math.sin(t.phase*.5))*.25):t.type==="tank"?(s.position.y=Math.abs(Math.sin(t.phase))*.05,s.rotation.z=Math.sin(t.phase)*.07):t.type==="swarm"&&(s.position.y=Math.abs(Math.sin(t.phase))*.14,s.rotation.y=Math.sin(t.phase*.5)*.3)}t.mesh.position.set(t.x,t.y,t.z),t.slow>0&&Math.random()<i*6&&Qe.emit(t.x,t.y+.8,t.z,{n:1,color:"#b8e6ff",speed:.4,up:.6,life:.6,gravity:-.5});const r=t.mesh.userData.hpBar;if(r.visible){r.quaternion.copy(Ye.quaternion),r.quaternion.premultiply(t.mesh.quaternion.clone().invert());const a=Math.max(0,t.hp/t.maxHp),o=t.mesh.userData.hpFg;o.scale.x=.96*a,o.position.x=-.48*(1-a),o.material.color.setHSL(.33*(1-a),.7,.55)}}for(let t=Nn.length-1;t>=0;t--)Nn[t].alive||Nn.splice(t,1)}function Rh(i){rt.leaks[i.type]=(rt.leaks[i.type]||0)+1,i.alive=!1,we.remove(i.mesh),rt.lights=Math.max(0,rt.lights-1),Vt.lighthouse.setLights(rt.lights),Kn(on.lights,"lights",rt.lights,"bad");const t=Vt.lighthouse.flamePos(rt.lights);Pr.emit(t.x,t.y,t.z,{n:8,color:"#b8b4b0",speed:.6,up:1.4,life:1.8,gravity:-.4}),An(`${i.def.name} slukket litt glød!`),Ge.lose(),Un=.3,rt.lights<=0&&Nu(!1)}function Ox(i){st.stun=de.stunTime,i.hitCd=4;const t=Math.floor(rt.embers*de.stunLoss);t>0&&(rt.embers-=t,Uu(st.x,On.position.y+1,st.z,t,!1,1.6)),st.carrying&&(st.carrying=!1,An("Rullepapiret blåste bort!")),Qe.emit(st.x,On.position.y+1.5,st.z,{n:16,color:"#ffffff",speed:3,up:2,life:.5}),Ge.stun(),Un=.2}function Bx(i){for(let t=is.length-1;t>=0;t--){const e=is[t];e.life-=i,e.phase+=i;const n=Math.max(Vt.heightAt(e.x,e.z),.1)+.35;e.settled||(e.vy-=16*i,e.x+=e.vx*i,e.z+=e.vz*i,e.y+=e.vy*i,e.y<=n&&(e.y=n,Math.abs(e.vy)>2.5?(e.vy=-e.vy*.4,e.vx*=.6,e.vz*=.6):e.settled=!0));const s=Math.hypot(st.x-e.x,st.z-e.z);if(st.stun<=0&&s<de.magnet){const l=(1-s/de.magnet)*14+3;e.x+=(st.x-e.x)/s*l*i,e.z+=(st.z-e.z)/s*l*i,e.settled=!0,e.y=n}const r=e.settled?Math.sin(e.phase*3)*.12:0;e.mesh.position.set(e.x,e.y+r,e.z),e.mesh.rotation.y+=i*3;const a=e.life<5,o=(.8+Math.min(e.value,6)*.08)*(a?.55+.45*(e.life/5):1);if(e.mesh.scale.setScalar(o),e.mesh.visible=!a||Math.sin(e.life*(e.life<1.5?30:16))>-.4,Math.random()<i*2.5&&Qe.emit(e.x,e.y+.2,e.z,{n:1,color:"#ffb347",speed:.3,up:1.2,life:.6,gravity:-.5}),st.stun<=0&&s<.9)rt.embers+=e.value,Kn(on.embers,"embers",rt.embers,"bump"),Qe.emit(e.x,e.y+.3,e.z,{n:8,color:"#ffe08a",speed:2,up:2.5,life:.4}),Ge.pickup(),we.remove(e.mesh),is.splice(t,1);else if(e.life<=0){const l=Math.max(1,Math.round(e.value*de.expiredRefund));rt.embers+=l,Qe.emit(e.x,e.y,e.z,{n:6,color:"#555048",speed:.6,up:1,life:.8,gravity:-.6}),we.remove(e.mesh),is.splice(t,1)}}}let Da=0,Iu="";function An(i){Da=2,Iu=i,Ns.textContent=""}function Ph(i){var M;const t=On.userData;st.stun-=i,t.stars.visible=st.stun>0,t.stars.rotation.y+=i*6;let e=0,n=0;if(st.stun<=0&&(rt.phase==="prep"||rt.phase==="wave")){if(ie.move.x||ie.move.z){st.goal=null;const m=Math.cos(Mi),f=Math.sin(Mi);e=ie.move.x*m+ie.move.z*f,n=-ie.move.x*f+ie.move.z*m}else if(st.goal){const m=st.goal,f=m.x-st.x,y=m.z-st.z;if(m.field===void 0){m.field=null;const A=Math.ceil(Math.hypot(f,y)/.5);for(let E=1;E<A;E++)if(!Vt.isWalkable(st.x+f*E/A,st.z+y*E/A)){m.field=Mn.walkField(m.x,m.z);break}}const b=m.field?Math.min(m.field.at(st.x,st.z),Math.hypot(f,y)+50):Math.hypot(f,y);m.t+=i;const g=b<.35||m.spot&&Math.hypot(m.spot.x-st.x,m.spot.z-st.z)<m.reach;if(b<m.best-.3&&(m.best=b,m.lastGain=m.t),g||m.t>12||m.t-m.lastGain>1.5)st.goal=null;else{const A=Math.min(1,b/.8),E=m.field&&Math.hypot(f,y)>1.5?m.field.dir(st.x,st.z):null,w=E&&(E[0]||E[1])?E[0]:f/Math.hypot(f,y),T=E&&(E[0]||E[1])?E[1]:y/Math.hypot(f,y);e=w,n=T;for(const x of Vt.colliders){if(m.spot&&x.x===m.spot.x&&x.z===m.spot.z)continue;const C=x.x-st.x,N=x.z-st.z,z=C*w+N*T;if(z<=0||z>x.r+2.2||z>b)continue;const U=-C*T+N*w;if(Math.abs(U)>x.r+.6)continue;const O=(1-Math.abs(U)/(x.r+.6))*1.6*(U>=0?1:-1);e-=-T*O,n-=w*O}const _=Math.hypot(e,n)||1;e=e/_*A,n=n/_*A}}}const r=Vt.heightAt(st.x,st.z)<.05,a=de.keeperSpeed*(st.carrying?de.carrySlow:1)*(r?de.wadeSlow:1),o=e*a,l=n*a,c=(M=Vt.isIce)!=null&&M.call(Vt,st.x,st.z)?1.6:12;st.vx+=(o-st.vx)*Math.min(1,i*c),st.vz+=(l-st.vz)*Math.min(1,i*c);let u=st.x+st.vx*i,h=st.z+st.vz*i;Vt.isWalkable(u,h)||(Vt.isWalkable(u,st.z)?h=st.z:Vt.isWalkable(st.x,h)?u=st.x:(u=st.x,h=st.z));for(const m of Vt.colliders){const f=u-m.x,y=h-m.z,b=Math.hypot(f,y),g=m.r+.4;b<g&&b>1e-4&&(u=m.x+f/b*g,h=m.z+y/b*g)}st.x=u,st.z=h;const p=Math.hypot(st.vx,st.vz);if(p>.3){const m=Math.atan2(-st.vx,-st.vz);st.face+=Rl(m,st.face)*Math.min(1,i*12),st.walk+=i*p*2.2}if(On.rotation.y=st.face,On.position.set(st.x,Math.max(Vt.heightAt(st.x,st.z),-.25),st.z),r&&p>1&&(st.splash=(st.splash||0)-i,st.splash<=0)){st.splash=.22,Qe.emit(st.x,.15,st.z,{n:4,color:"#e8fbff",speed:1.6,up:2.2,life:.35,gravity:12});const m=_u();m.position.set(st.x,.1,st.z),m.material.color.set("#f4fdff"),we.add(m),ks.push({mesh:m,t:0,r:1.6,dur:.9})}const d=Math.sin(st.walk)*Math.min(1,p/3);t.legs[0].position.z=d*.18,t.legs[1].position.z=-d*.18,t.body.position.y=Math.abs(d)*.08;const v=p<.3?Math.sin(rt.time*2.2)*.025:0;t.body.scale.set(1-v*.5,1+v,1-v*.5),t.body.rotation.z=st.stun>0?.5:d*.04,t.lanternArm.rotation.x=-d*.35,t.carried.visible=st.carrying,t.carried.rotation.y+=i*2,t.carried.position.y=2.35+Math.sin(rt.time*3)*.08,ec.intensity=5+Math.sin(rt.time*11)*.6}function kx(){for(const i of ie.clicks.splice(0)){Ah.setFromCamera(i,Ye);const t=Ah.intersectObject(Vt.terrain)[0];if(!t)continue;let e=t.point.x,n=t.point.z;const s=Vt.lighthouse.pos,r=Pa(Vt.plinths,e,n,2.2)||(Math.hypot(s.x-e,s.z-n)<4.5?{x:s.x,z:s.z,big:!0}:null);if(r){const a=r.big?4.3:1.95;let o=st.x-r.x,l=st.z-r.z;const c=Math.hypot(o,l)||1;e=r.x+o/c*a,n=r.z+l/c*a}st.goal={x:e,z:n,t:0,best:1/0,lastGain:0,spot:r,reach:r?r.big?de.lighthouseReach-.4:de.reach-.25:0},Qe.emit(e,Vt.heightAt(e,n)+.2,n,{n:6,color:"#fff3d0",speed:1.5,up:.5,life:.35,gravity:0})}}function Vs(i=!rt.paused,t=!1){rt.paused=i;const e=ie.labels();ae("pause-keys").textContent=`${e.name}: fortsett med ${e.pause} · start på nytt med ${e.restart}`,ae("pause").classList.toggle("hidden",!i),ae("confirm").classList.toggle("hidden",!t),rt.confirming=i&&t}ae("btn-resume").addEventListener("click",()=>Vs(!1));ae("btn-restart").addEventListener("click",()=>Vs(!0,!0));ae("btn-yes").addEventListener("click",()=>yr());ae("btn-no").addEventListener("click",()=>Vs(!0,!1));ae("btn-worlds").addEventListener("click",()=>{location.href=`${location.pathname}?world=${pn}`});function yr(){for(const i of[Nn,Mr,is,Bs,ks]){for(const t of i)t.mesh&&we.remove(t.mesh);i.length=0}for(const i of Zn)we.remove(i.mesh);Zn.length=0;for(const i of Vt.plinths)i.tower=null;for(let i=Vt.colliders.length-1;i>=0;i--)Vt.colliders[i].tower&&Vt.colliders.splice(i,1);rt.buildMode=!1,st.chargeTower&&wa(st.chargeTower,0),Object.assign(rt,{phase:"title",wave:0,timer:0,embers:de.startEmbers,lights:Dn,spawnQueue:[],leaks:{},waveClock:0,sel:0,paused:!1,confirming:!1}),Object.assign(st,{x:Vt.lighthouse.pos.x+1,z:Vt.lighthouse.pos.z+7.5,vx:0,vz:0,carrying:!1,stun:0,charge:0,chargeTower:null,goal:null}),Vt.lighthouse.setLights(Dn),qx(),Un=0,Da=0,Ei={},Kn(on.lights,"lights",rt.lights),Kn(on.embers,"embers",rt.embers),Kn(on.wave,"wave",0),on.timer.textContent="",ae("pause").classList.add("hidden"),ae("confirm").classList.add("hidden"),ae("overlay").classList.add("hidden"),ie.clear(),rt.phase="title",Ha(!0),window.__restarts=(window.__restarts||0)+1}function Vx(){const i=ie.device;if(Ei.device===i+ie.padKind)return;Ei.device=i+ie.padKind;const t=ie.labels();ae("touch").classList.toggle("hidden",i!=="touch"||rt.phase==="title"),zi.querySelectorAll("button i").forEach((e,n)=>{e.textContent=i==="pad"?n===rt.sel?t.build:"":i==="touch"?"":String(n+1)}),nc.textContent="Neste bølge ▶",Ei.sel=-1}function Gx(i){if(ie.consume("fps")&&ic.classList.toggle("hidden"),ie.consume("music")&&zu(),Vx(),rt.phase==="title"){["build","carry","next","pause"].some(p=>ie.consume(p))&&Ha(),ie.clear();return}if(Kn(on.embers,"embers",rt.embers),!(rt.phase==="prep"||rt.phase==="wave")){if((rt.phase==="won"||rt.phase==="lost")&&ie.consume("restart")){yr();return}ie.clear(),zi.classList.add("hidden"),Ch("");return}if(ie.consume("restart")){rt.confirming?yr():Vs(!0,!0);return}if(ie.consume("pause")&&Vs(!rt.paused),rt.confirming){if(ie.consume("build")||ie.consume("next")){yr();return}ie.consume("carry")&&Vs(!0,!1)}if(rt.paused){ie.clear();return}kx(),ie.consume("next")&&rt.phase==="prep"&&(rt.timer=0),ie.consume("selPrev")&&(rt.sel=(rt.sel+2)%3),ie.consume("selNext")&&(rt.sel=(rt.sel+1)%3);const e=Pa(Vt.plinths,st.x,st.z,de.reach,p=>!p.tower),n=Pa(Zn,st.x,st.z,de.reach),s=Vt.lighthouse.pos,r=Math.hypot(s.x-st.x,s.z-st.z)<de.lighthouseReach,a=st.stun>0,o=sc();ie.consume("build")&&!a&&(rt.buildMode||e?Cl(da[rt.sel]):rt.buildMode=!0),da.forEach((p,d)=>{ie.consume("b"+(d+1))&&!a&&(rt.sel=d,Cl(p))});const l=(rt.buildMode||!!e)&&!a&&!st.carrying;Ix(l,o,da[rt.sel]),zi.classList.toggle("hidden",!l),l&&(zi.querySelectorAll("button").forEach((p,d)=>{p.disabled=rt.embers<Ra[p.dataset.tower].cost,p.classList.toggle("sel",d===rt.sel)}),Ei.sel!==rt.sel&&ie.device==="pad"&&(Ei.sel=rt.sel,zi.querySelectorAll("button i").forEach((p,d)=>p.textContent=d===rt.sel?ie.labels().build:""))),ie.consume("carry")&&!a&&(!st.carrying&&r?rt.embers>=de.stoneCost?(rt.embers-=de.stoneCost,st.carrying=!0,Kn(on.embers,"embers",rt.embers,"bump"),Qe.emit(st.x,On.position.y+2.3,st.z,{n:14,color:"#8ff0ff",speed:2,up:2,life:.6,gravity:2}),Ge.stone()):(Ge.deny(),An(`Rullepapir koster ${de.stoneCost} ✦`)):st.carrying&&r?(st.carrying=!1,rt.embers+=de.stoneCost,Ge.stone(),An("Rullepapiret er lagt tilbake")):!st.carrying&&rt.buildMode?rt.buildMode=!1:st.carrying?n||An("Bær rullepapiret til et tårn"):An("Rullepapir hentes ved fyret"));const c=st.carrying&&!a&&n&&n.level<3?n:null;c!==st.chargeTower&&(st.chargeTower&&wa(st.chargeTower,0),st.chargeTower=c,st.charge=0),c&&(st.charge+=i/de.chargeTime,wa(c,Math.min(1,st.charge)),Math.random()<i*20&&Qe.emit(st.x,On.position.y+2.2,st.z,{n:1,color:"#8ff0ff",speed:.5,up:-.5,life:.5,gravity:0}),st.charge>=1&&(c.level+=1,xu(c,c.level),wa(c,0),st.carrying=!1,st.chargeTower=null,st.charge=0,Qe.emit(c.x,c.y+1.2,c.z,{n:30,color:"#8ff0ff",speed:4,up:4,life:.9,gravity:5}),Ge.upgrade(),An(`${c.def.name} er nå nivå ${c.level}`)));const u=ie.labels();Da-=i;let h="";if(Da>0)h=Iu;else if(a)h="Moralpanikk! Måka slo deg ut";else if(c)h="Gir tårnet energi … bli stående";else if(st.carrying&&n&&n.level>=3)h="Tårnet er på maks nivå";else if(st.carrying)h="Bær rullepapiret til et tårn";else if(r&&!st.carrying)h=`${u.carry} = hent rullepapir (${de.stoneCost} ✦)`;else if(r&&st.carrying)h=`${u.carry} = legg rullepapiret tilbake`;else if(n&&n.level<3)h=`${n.def.name} nv. ${n.level} · hent rullepapir ved fyret for å oppgradere`;else if(l&&!o.ok)h=`Ikke lov her: ${o.why} · ${u.carry} = avbryt`;else if(l){const p=Ra[da[rt.sel]].name,d=o.plinth?" (sokkel: +25 % rekkevidde)":"";h=ie.device==="pad"?`${u.sel} = velg tårn · ${u.build} = sett ned ${p}${d}`:ie.device==="touch"?`Trykk på et tårn, eller Bygg = ${p}${d}`:`1 / 2 / 3 eller ${u.build} = sett ned ${p}${d}`}else rt.phase==="prep"&&rt.wave===0&&(h=`${u.build} = bygg et tårn der du står (sokler gir +25 % rekkevidde)`);Ch(h),bx(i)}const rs=new Me;{const i=document.createElement("canvas");i.width=64,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,64,0);e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.5,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,256),t.globalCompositeOperation="destination-in";const n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.2,"rgba(0,0,0,0.8)"),n.addColorStop(.65,"rgba(0,0,0,0.3)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,256);const s=new Fi(i);for(let r=0;r<6;r++){const a=new Jt(new Jn(1,1),new be({map:s,color:"#ffdcae",transparent:!0,opacity:.05,blending:ri,depthWrite:!1,depthTest:!1,fog:!1}));a.scale.set(2.5+r%3*1.8,34,1),a.position.set(-22+r*8.5,9,-4+r%2*6),a.rotation.set(-.95,0,.55),a.userData.phase=r*1.3,rs.add(a)}}rs.visible=He.id==="tak";rs.renderOrder=50;we.add(rs);function Hx(i){rs.position.set(dn.x,0,dn.z),rs.rotation.y=Mi,rs.children.forEach(t=>t.material.opacity=.03+.025*Math.sin(i*.35+t.userData.phase))}let Un=0;const Ln=new F,Ro=new F,Ls=new F,pa=new F,Po=new F,dn=new F(st.x,0,st.z);function Wx(i){dn.x+=(st.x-dn.x)*Math.min(1,i*4),dn.z+=(st.z-dn.z)*Math.min(1,i*4),dn.y=On.position.y;const t=Gi?1.15:1,e=ie.zoom*t,n=Ye.aspect<1.2?1.25:1;Mi+=ie.look;const s=6.6*e*n;Ye.position.set(dn.x+Math.sin(Mi)*s,dn.y+12.5*e*n,dn.z+Math.cos(Mi)*s),Un=Math.max(0,Un-i),Un>0&&(Ye.position.x+=(Math.random()-.5)*Un*2,Ye.position.y+=(Math.random()-.5)*Un),Ye.lookAt(dn.x-Math.sin(Mi),dn.y+.5,dn.z-Math.cos(Mi)),Ye.updateMatrixWorld();let r=0,a=0,o=0;const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([v,M])=>{const m=Ln.set(v,M,.5).unproject(Ye),f=m.sub(Ye.position).normalize(),y=f.y<-.05?(dn.y-Ye.position.y)/f.y:80;return[Ye.position.x+f.x*Math.min(y,80),Ye.position.z+f.z*Math.min(y,80)]});for(const[v,M]of l)r+=v/4,a+=M/4;for(const[v,M]of l)o=Math.max(o,Math.hypot(v-r,M-a));const c=Ie.clamp(Math.ceil((o+4)/4)*4,16,80);je.shadow.camera.right!==c&&(Object.assign(je.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),je.shadow.camera.updateProjectionMatrix());const u=2*c/je.shadow.mapSize.x;Ls.set(zn.sunDir[0],zn.sunDir[1],zn.sunDir[2]).normalize(),pa.set(0,1,0).cross(Ls).normalize(),Po.copy(Ls).cross(pa).normalize(),Ln.set(r,dn.y,a);const h=Math.round(Ln.dot(pa)/u)*u,p=Math.round(Ln.dot(Po)/u)*u,d=Ln.dot(Ls);Ro.copy(pa).multiplyScalar(h).addScaledVector(Po,p).addScaledVector(Ls,d),je.target.position.copy(Ro),je.position.copy(Ro).addScaledVector(Ls,40),je.shadow.camera.far=40+c+20,Hx(rt.time),Rx()}const Do=He.eruption,Lo=Vt.extras.bridges??[];let pr=0,Ni=null;function Xx(i){if(!(!Do||!Lo.length||rt.phase!=="wave")){if(pr+=i,Ni&&pr>=Do.closed)Ni.setClosed(!1),Ni=null,Mn.setBlock(()=>!1);else if(!Ni&&pr>=Do.every){pr=0;const t=Lo[Math.random()*Lo.length|0];t.setClosed(!0),Ni=t,Mn.setBlock((e,n)=>(e-t.x)**2+(n-t.z)**2<2.8*2.8),Un=Math.max(Un,.35),Ge.boom(),An("🌋 Utbrudd! En bro er stengt av lava i 10 s")}}}function qx(){Ni&&(Ni.setClosed(!1),Mn.setBlock(()=>!1)),Ni=null,pr=0}function Yx(i){if(Xx(i),rt.phase==="prep")rt.timer-=i,on.timer.textContent=`Neste bølge om ${Math.ceil(Math.max(0,rt.timer))} s`,rt.timer<=0&&(on.timer.textContent="",Du());else if(rt.phase==="wave"){for(rt.waveClock+=i;rt.spawnQueue.length&&rt.spawnQueue[0].t<=rt.waveClock;){const t=rt.spawnQueue.shift();Ex(t.type,t.path)}if(on.timer.textContent=`${Nn.length+rt.spawnQueue.length} monstre igjen`,!rt.spawnQueue.length&&!Nn.length){if(on.timer.textContent="",rt.wave>=Eu.length){Nu(!0);return}const t=de.waveBonus+rt.wave*de.waveBonusPer+Math.floor(Math.min(rt.embers,300)*de.interest);rt.embers+=t,Kn(on.embers,"embers",rt.embers,"bump"),An(`Bølge ${rt.wave} slått! +${t} ✦`),Pu(de.prepTime),Se==null||Se.setIntensity(0)}}}function Nu(i){rt.phase=i?"won":"lost",ae("touch").classList.add("hidden"),ae("btn-pause").classList.add("hidden"),zi.classList.add("hidden");let t="";if(Se==null||Se.setIntensity(0),i){Ge.win();const n=Ar();Pv(pn),Ar()>n&&(t=`<p class="lead">🔓 Ny verden låst opp: <b>${Qs[pn+1].name}</b>!</p>`)}const e=ae("overlay");e.querySelector(".card").innerHTML=i?`<h1>Gløden lever!</h1><p class="lead">Ti bølger med forbud, komitéer og moralpanikk er chillet ned, og ${rt.lights} av 20 glødepunkter brenner fortsatt. Øya ånder ut.</p>${t}<div class="menu-row"><button id="btn-again">↺ Spill kartet igjen</button>${t?'<button id="btn-nextworld" class="alt">Neste verden ▶</button>':""}<button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`:`<h1>Gløden sluknet</h1><p class="lead">Byråkratiet vant denne gangen, i bølge ${rt.wave}. Rull opp ermene og prøv igjen.</p><div class="menu-row"><button id="btn-again">↺ Start kartet på nytt</button><button id="btn-worlds2" class="alt">🌍 Bytt verden</button></div>`,e.classList.remove("hidden"),ae("btn-again").addEventListener("click",()=>yr()),ae("btn-worlds2").addEventListener("click",()=>{location.href=`${location.pathname}?world=${pn}`}),t&&ae("btn-nextworld").addEventListener("click",()=>{location.href=`${location.pathname}?world=${pn+1}`})}let Se=null;const Dh=(()=>{try{return JSON.parse(localStorage.getItem("glod-music")||"{}")}catch{return{}}})();function Fu(){try{localStorage.setItem("glod-music",JSON.stringify({vol:Se.volume,muted:Se.muted}))}catch{}}function jx(){const i=Su();Se||!i||mn.has("nomusic")||(Se=gx(i.ctx,i.noiseBuf,He.id),Se.setVolume(Dh.vol??.7),Se.setMuted(!!Dh.muted),Se.start(),ae("music-vol").value=Math.round(Se.volume*100),ae("btn-mute").textContent=Se.muted?"M: av":"M: på",window.__music=Se,window.__audioCtx=i.ctx)}function zu(){Se&&(Se.setMuted(!Se.muted),ae("btn-mute").textContent=Se.muted?"M: av":"M: på",Fu(),An(Se.muted?"🎶 Musikk av":"🎶 Musikk på"))}for(const i of["pointerdown","keydown","touchend"])addEventListener(i,()=>{const t=Su();t&&t.ctx.state!=="running"&&t.ctx.resume()},{passive:!0});ae("music-vol").addEventListener("input",i=>{Se&&(Se.setVolume(i.target.value/100),Fu())});ae("btn-mute").addEventListener("click",i=>{i.preventDefault(),zu()});function Ha(i=!1){rt.phase==="title"&&(px(),jx(),Se==null||Se.setIntensity(0),i&&ae("touch").classList.toggle("hidden",ie.device!=="touch"),ae("overlay").classList.add("hidden"),Gi&&(ie.device="touch"),Ei.device=null,ae("btn-pause").classList.remove("hidden"),Vt.lighthouse.setLights(rt.lights),Kn(on.embers,"embers",rt.embers),Pu(de.firstPrep),wu&&$x())}ae("btn-start").addEventListener("click",Ha);{const i=ae("worlds"),t=Ar();if(Qs.forEach((e,n)=>{const s=document.createElement("button");s.className="world"+(n===pn?" sel":"")+(n>=t?" locked":""),s.innerHTML=`<b>${n>=t?"🔒 ":""}${e.name}</b><small>${n>=t?"Vinn forrige verden for å låse opp":e.blurb}</small>`,s.disabled=n>=t,s.addEventListener("click",()=>{n!==pn&&(location.href=`${location.pathname}?world=${n}`)}),i.appendChild(s)}),ae("btn-start").textContent=`Tenn gløden på ${He.name}`,He.skyDusk){const e=document.createElement("button");e.id="btn-tod",e.className="tod",e.textContent=ss==="skumring"?"🌅 Skumring (bytt til dag)":"☀️ Dag (bytt til skumring)",e.addEventListener("click",()=>{try{localStorage.setItem("glod-tid",ss==="skumring"?"dag":"skumring")}catch{}location.href=`${location.pathname}?world=${pn}&tid=${ss==="skumring"?"dag":"skumring"}`}),ae("worlds").after(e)}}ae("btn-quality").addEventListener("click",()=>Cu(ci==="high"?"low":"high"));addEventListener("keydown",i=>{i.code==="KeyG"&&!i.repeat&&Cu(ci==="high"?"low":"high")});ae("btn-quality").textContent=ci==="high"?"Høy":"Lav";ae("btn-pause").classList.add("hidden");function $x(){rt.embers=999;const i=Vt.lighthouse.pos,t=Vt.plinths.slice().sort((e,n)=>Math.hypot(e.x-i.x,e.z-i.z-4)-Math.hypot(n.x-i.x,n.z-i.z-4));["ring","chips","speaker","ring","chips","ring"].forEach((e,n)=>{const s=t[n];st.x=s.x+1.9,st.z=s.z,Cl(e),n<3&&(Zn[Zn.length-1].level=n+1,xu(Zn[Zn.length-1],n+1))}),st.x=i.x+1,st.z=i.z+6,st.carrying=!0,rt.wave=Number(mn.get("demo"))||4,rt.wave-=1,Du(),rt.waveClock=6,rt.embers=142}const Zx=new gu;let Uo=0,ma=0,ga=0;window.__fpsSamples=[];window.__game={S:rt,monsters:Nn,towers:Zn,embers:is,world:Vt,K:st,renderer:Cn,camera:Ye,input:ie,buildSpot:()=>sc(),ghost:yi,get camYaw(){return Mi}};window.__errors=[];addEventListener("error",i=>window.__errors.push(String(i.message)));addEventListener("unhandledrejection",i=>window.__errors.push(String(i.reason)));function Ou(){requestAnimationFrame(Ou);const i=Zx.getDelta(),t=Math.min(i,.05);rt.paused||(rt.time+=t),ie.update(t),rt.paused||(Vt.update(rt.time),yx.update(rt.time));for(let e=0;e<_x&&!rt.paused&&(rt.phase==="prep"||rt.phase==="wave");e++)e>0&&(rt.time+=t,Ph(t)),Yx(t),zx(t),Nx(t),Fx(t),Bx(t),Dx(t);if(rt.paused||Ph(t),Gx(t),!rt.paused){if(Qe.update(t),Math.random()<t*(4+10*(rt.lights/Dn))){const e=Vt.lighthouse.tip;Pr.emit(e.x,e.y,e.z,{n:1,color:"#e8e2dc",speed:.5,up:1.6,life:3.2,gravity:-.15})}Pr.update(t)}if(Wx(t),Cn.info.reset(),Va.render(t),Uo++,ma+=i,ma>=.5){const e=Uo/ma;window.__fpsSamples.push(e),window.__fpsSamples.length>240&&window.__fpsSamples.shift(),ic.textContent=`${e.toFixed(0)} fps · ${Cn.info.render.calls} dc`,ga=e<(Gi?28:45)?ga+1:0,ga>=6&&ns>1&&(ns=Math.max(1,ns-.25),Cn.setPixelRatio(ns),Ga(),ga=0),Uo=0,ma=0}}Ou();wu&&mn.has("autostart")&&Ha();function Rl(i,t){let e=i-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}
